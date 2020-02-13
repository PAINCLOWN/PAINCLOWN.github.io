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
  {
	"name": "BeatsAudio™ EQE",
	"package": "com.painclown.beatsaudioeqe",
	"author": "painclown",
	"version": "1.0",
	"dependency": "N/A",
	"minOSVersion": "9.0",
	"maxOSVersion": "13.3",
	"otheriOS": "untested",
	"description": "<div>测试包~请勿下载<br><br>~~~~~~~<br><br><strong>需要帮助？</strong> 暂不提供帮助嗷</div>",
  	"changelog": {
	    "1.0": [
	      "无"
	    ]
  	},
	"screenshots": {
		"test.png": ""
	},
	"links": {}
}
depictions\screenshots (文件夹)
'''

import json
import re
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
def packageToDict(packages):
    newPackagesList = []
    tempNewPackages = []
    print('packages to dict ···')
    #print(packages)
    for pack in packages:
        if pack == '\n':
            #print(tempNewPackages)
            tempNewPackagesDict = dict(tempNewPackages)
            newPackagesList.append(tempNewPackagesDict)
            tempNewPackages.clear()
        else:
            temppack = pack.replace("\n", "").split(":")
            #多冒号只用第一个冒号分隔列表，其他列表恢复冒号合并成一个字符串
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
            tempNewPackages.append(temppack)
    #print(newPackagesList)
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
            Name = packagesDict['Package']

        packageJsonBase ={
        "name": Name,
        "package": packagesDict['Package'],
        "author": Author,
        "version": Version,
        "dependency": Depends,
        "minOSVersion": "9.0",
        "maxOSVersion": "13.3.1",
        "otheriOS": "untested",
        "description": Description,
        "changelog": {
            "1.0": [
            "暂无"
            ]
        },
        "screenshots": {
            "test.png": ""
        },
        "links": {}
        }
        packagesJson = json.dumps(packageJsonBase,ensure_ascii=False)
        #print(packagesJson)
        file = open("depictions\packages\\"+packagesDict['Package']+".json",'w',encoding='utf-8')
        file.writelines(packagesJson)
        file.close

def PackagesCustomDepiction():
    #初始化字典
    packages = openPackage(packagesFile)
    packagesDictList = packageToDict(packages)
    print('正在生成插件描述页 ···')
    urlHeard = 'https://pozz.cf/repo/depictions/?p='
    newPackages = []
    for packagesDict in packagesDictList:
        packagesDict['Depiction'] = urlHeard + packagesDict['Package']
        for packagesKey in packagesDict:
            #print(packagesKey)
            #print(packagesDict[packagesKey])
            lineStr = packagesKey + ':' + packagesDict[packagesKey]+  '\n'
            newPackages.append(lineStr)
        newPackages.append('\n')
    file = open(packagesFile,'w',encoding='utf-8')
    file.writelines(newPackages)
    file.close()

def PackagesCustomSection():
    #初始化字典
    packages = openPackage(packagesFile)
    packagesDictList = packageToDict(packages)

    print('正在插件自定义插件分类 ···')
    packagesSystemList = ['com.painclown.repoicons']
    newPackages = []
    for packagesDict in packagesDictList:
        if packagesDict['Package'].replace(' ' ,'') in packagesSystemList:
            print(packagesDict['Package'])
            packagesDict['Section'] = 'D-System'
        else:
            packagesDict['Section'] = 'D-Tweaks'
        for packagesKey in packagesDict:
            #print(packagesKey)
            #print(packagesDict[packagesKey])
            lineStr = packagesKey + ':' + packagesDict[packagesKey]+  '\n'
            newPackages.append(lineStr)
        newPackages.append('\n')
    file = open(packagesFile,'w',encoding='utf-8')
    file.writelines(newPackages)
    file.close()

def run():
    packagesRe(packagesFile)
    packages = openPackage(packagesFile)
    packagesDictList = packageToDict(packages)
    packagesDictListToJson(packagesDictList)
    PackagesCustomDepiction()
    PackagesCustomSection()
    print('所有操作完成。')

def test():
    packages = openPackage(packagesFile)
    packagesRe(packages)

def main():
    run()
    #test()


if __name__ == "__main__":
    main()
