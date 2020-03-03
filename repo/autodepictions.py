# encoding:utf-8
'''
PAINCLOWN-script
1.读取Package

2.多行读取，正则匹配
3.空白行进行下一次描述生成

Package: com.painclown.beatsaudioeqe
Version: 1.0
Architecture: iphoneos-arm
Maintainer: PAINCLOWN <pozz@vip.qq.com>
Depends: com.r333d.eqe
Filename: debs/com.painclown.beatsaudioeqe_1.0_iphoneos-arm.deb
Size: 1158
MD5sum: a9ff476292438b06a0b52bd5bf31f4c8
SHA1: 40b86971bc3ec9265fed758eb0653084d5d9a01f
SHA256: 089154d2338d4640b5e0dcf073acc3e225215eabd8f6ec9655f51ec3968f57ba
Section: Tweaks
Description: 用EQ调出失传的HTC BeatsAudio音效
Author: PAINCLOWN
Depiction: https://pozz.cf/repo/depictions/?p=com.painclown.beatsaudioeqe
Name: BeatsAudio™ EQE
Pre-Depends: com.r333d.eqe, firmware (>= 7)

depictions\packages  (json)

depictions\screenshots (文件夹)
'''

import json
import re
import translate
packagesFile = 'Packages'

#打开packages文件
def openPackage(fileName):
    file = open(fileName,'r',encoding='utf-8')
    packages = file.readlines()
    file.close()
    return packages

def packagesRe(fileName):
    file = open(fileName,'r',encoding='utf-8')
    packages = file.read()
    file.close()
    #print(packages)
    temp = packages.replace('\n\t','').replace('\n ','')
    file = open(packagesFile,'w',encoding='utf-8')
    file.write(temp)
    file.close()
    


#packages文件转字典
def packageToDict(packages,trans = False):
    '''
    默认trans = False
    为True时开始翻译
    '''
    newPackagesList = []
    tempNewPackages = []
    #用于重新保存翻译后的package文件
    newPackages = []
    print('packages to dict ···')
    #print(packages)
    for pack in packages:
        if pack == '\n':
            #print(tempNewPackages)
            tempNewPackagesDict = dict(tempNewPackages)
            newPackagesList.append(tempNewPackagesDict)
            tempNewPackages.clear()
            #\n分隔每个deb信息
            newPackages.append('\n')
        else:
            temppack = pack.replace("\n", "").split(": ")
            #多个冒号只用第一个冒号分隔列表，其他元素恢复冒号合并成一个字符串
            if len(temppack) > 2:
                a = temppack[0]
                tempStr = ''
                for b in temppack:
                    if b == a:
                        continue
                    else:
                        if tempStr == '':
                            tempStr = b
                        else:
                            tempStr = tempStr +':'+ b
                temppack = [a,tempStr]
            if trans == True:
                #翻译自定义label的内容
                labelList = ['Name','Description'] 
                #print('开始翻译：%s' % labelList)
                for label in labelList:
                    if temppack[0] == label:
                        labelAndLang = translate.translate(temppack[1])
                        print(labelAndLang)
                        if labelAndLang[1] in ['zh-CN','zh-TW']:
                            pass
                        else:
                            if label == 'Name':
                                newlabel = temppack[1] +'「'+ labelAndLang[0] +'」'
                            else:
                                newlabel ='「'+ labelAndLang[0] +'」'+ temppack[1] 
                            temppack =[temppack[0], newlabel]
            lineStr = temppack[0] + ': ' + temppack[1] +  '\n'
            #保存每行内容用于生成packages文件
            newPackages.append(lineStr)
            #保存每行内容成用于后续转换
            tempNewPackages.append(temppack)
    #生成packages 文件
    file = open(packagesFile,'w',encoding='utf-8')
    file.writelines(newPackages)
    file.close()
    #返回newPackagesList用于后续转换
    print(newPackagesList)
    return newPackagesList



#字典转json
def packagesDictListToJson(packagesDictList):
    print('dict to json ···')
    for packagesDict in packagesDictList:
        try:
            Depends = packagesDict['Pre-Depends']
        except:
            Depends = "无"
        try:
            Author = packagesDict['Author']
        except:
            Author = "PAINCLOWN"
        try:
            Version = packagesDict['Version']
        except:
            Version = "1.0"
        try:
            Description = packagesDict['Description']
        except:
            Description = packagesDict['Package'] + "\t暂时没有像样的描述哦~"
        try:
            Name = packagesDict['Name']
        except:
            Name = packagesDict['Package'].replace(' ','')
        #json已压缩
        packageJsonBase ={"name":Name,"package":packagesDict['Package'].replace(' ',''),"author":Author,"version":Version,"dependency":Depends,"minOSVersion":"9.0","maxOSVersion":"13.3.1","otheriOS":"untested","description":Description,"changelog":{"1.0":["暂无"]},"screenshots":{"test.png":""},"links":{}}
        packagesJson = json.dumps(packageJsonBase,ensure_ascii=False)
        #print(packagesJson)
        file = open("depictions\packages\\"+packagesDict['Package'].replace(' ','')+".json",'w',encoding='utf-8')
        file.writelines(packagesJson)
        file.close

def packagesDictListToSileoJson(packagesDictList):
    print('dict to Sileo json ···')
    for packagesDict in packagesDictList:
        try:
            Depends = packagesDict['Pre-Depends'].replace(' ' ,'')
        except:
            Depends = "无"
        try:
            Author = packagesDict['Author']
        except:
            Author = "PAINCLOWN"
        try:
            Version = packagesDict['Version'].replace(' ' ,'')
        except:
            Version = "1.0"
        try:
            Description = packagesDict['Description']
        except:
            Description = packagesDict['Package'] + "\t暂时没有像样的描述哦~"
        try:
            Name = packagesDict['Name']
        except:
            Name = packagesDict['Package'].replace(' ' ,'')
        #json已压缩
        packageJsonBase ={"class":"DepictionTabView","headerImage":"https://pozz.cf/repo/sileo/src/header.png","minVersion":"0.3","tabs":[{"class":"DepictionStackView","tabname":"Details","tintColor":"#a2b9c9","views":[{"class":"DepictionSubheaderView","title":"描述","useBoldText":True,"useBottomMargin":False},{"class":"DepictionMarkdownView","markdown":Description,"useRawFormat":True},{"class":"DepictionSeparatorView"},{"class":"DepictionSubheaderView","title":"截图","useBoldText":True,"useBottomMargin":False},{"class":"DepictionScreenshotsView","itemCornerRadius":8,"itemSize":"{330, 596.385543}","screenshots":[{"accessibilityText":"Screenshot","url":"https://pozz.cf/repo/sileo/src/header.png"}]},{"class":"DepictionSpacerView","spacing":16},{"class":"DepictionSeparatorView"},{"class":"DepictionSpacerView","spacing":16},{"class":"DepictionHeaderView","title":"详情","useBoldText":True,"useBottomMargin":False},{"class":"DepictionSpacerView","spacing":8},{"class":"DepictionTableTextView","text":Author,"title":"作者"},{"class":"DepictionTableTextView","text":Version,"title":"版本"},{"class":"DepictionTableTextView","text":"iOS9 - 13.3.0","title":"兼容性"},{"class":"DepictionTableTextView","text":Depends,"title":"依赖"},{"class":"DepictionSpacerView","spacing":16},{"class":"DepictionSeparatorView"},{"class":"DepictionSpacerView","spacing":16},{"action":"https://twitter.com/Pa1ncl0wn","class":"DepictionTableButtonView","title":"推特上找我","openExternal":True},{"action":"mailto:vip.qq.com","class":"DepictionTableButtonView","title":"古老的邮箱联系"},{"action":"https://qr.alipay.com/tsx06936chkivwaljc8bb41","class":"DepictionTableButtonView","title":"给我整一杯牛🍺 致富饱"},{"class":"DepictionSpacerView","spacing":40},{"URL":"https://pozz.cf/repo/CydiaIcon.png","alignment":1,"class":"DepictionImageView","cornerRadius":0,"height":45,"width":45},{"class":"DepictionSpacerView","spacing":16}]},{"class":"DepictionStackView","tabname":"Changelog","tintColor":"#a2b9c9","views":[{"class":"DepictionSubheaderView","title":"1.0-1","useBoldText":True,"useBottomMargin":False},{"class":"DepictionMarkdownView","markdown":"<ul>\n<li>Fixed something</li>\n<li>Fixed another something</li>\n</ul>","useRawFormat":True},{"class":"DepictionSubheaderView","title":"1.0","useBoldText":True,"useBottomMargin":False},{"class":"DepictionMarkdownView","markdown":"<ul>\n<li>Initial release</li>\n</ul>","useRawFormat":True}]}],"tintColor":"#a2b9c9"}
        packagesJson = json.dumps(packageJsonBase,ensure_ascii=False)
        #print(packagesJson)
        file = open("sileo\\"+packagesDict['Package'].replace(' ','')+".json",'w',encoding='utf-8')
        file.writelines(packagesJson)
        file.close

#自定义描述页网址
def PackagesCustomDepiction(packagesDictList):

    print('正在生成插件描述页和sileo描述 ···')
    urlHeard = 'https://pozz.cf/repo/depictions/?p='
    sileoUrlHeard = 'https://pozz.cf/repo/sileo/'
    newPackages = []
    for packagesDict in packagesDictList:
        packagesDictDepiction = urlHeard + packagesDict['Package'].replace(' ','')
        packagesDictSileodepiction = sileoUrlHeard + packagesDict['Package'].replace(' ','') + '.json'
        packagesDict.update({'Depiction':packagesDictDepiction,'Sileodepiction':packagesDictSileodepiction})
        #重新组成多行
        for packagesKey in packagesDict:
            #print(packagesKey)
            #print(packagesDict[packagesKey])
            lineStr = packagesKey + ': ' + packagesDict[packagesKey] +  '\n'
            newPackages.append(lineStr)
        newPackages.append('\n')
    file = open(packagesFile,'w',encoding='utf-8')
    file.writelines(newPackages)
    file.close()

#自定义分类名称
def PackagesCustomSection(packagesDictList):
    print('正在插件自定义插件分类、图标 ···')
    packagesSystemList = ['com.painclown.repoicons']
    newPackages = []
    for packagesDict in packagesDictList:
        if packagesDict['Package'].replace(' ' ,'') in packagesSystemList:
            print(packagesDict['Package'])
            packagesDict['Section'] = 'D-System'
        else:
            packagesDict['Section'] = 'D-Tweaks'
        iconUrl = 'https://pozz.cf/repo/depictions/sectionIcons/'+packagesDict['Section']+'.png'
        packagesDict.update({'Icon':iconUrl})
        for packagesKey in packagesDict:
            #print(packagesKey)
            #print(packagesDict[packagesKey])
            lineStr = packagesKey + ': ' + packagesDict[packagesKey]+  '\n'
            newPackages.append(lineStr)
            
        newPackages.append('\n')
    file = open(packagesFile,'w',encoding='utf-8')
    file.writelines(newPackages)
    file.close()

def run():
    packagesRe(packagesFile)
    packages = openPackage(packagesFile)
    #packagesDictList = packageToDict(packages)
    packagesDictList = packageToDict(packages,True)
    packagesDictListToJson(packagesDictList)
    packagesDictListToSileoJson(packagesDictList)
    #自定义部分
    PackagesCustomDepiction(packagesDictList)
    PackagesCustomSection(packagesDictList)
    print('所有操作完成。')

def test():
    packages = openPackage(packagesFile)
    packagesRe(packages)

def main():
    run()
    #test()


if __name__ == "__main__":
    main()
