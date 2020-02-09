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

def openPackage(fileName):
    file = open(fileName,'r',encoding='utf-8')
    packages = file.readlines()
    file.close()
    return packages

def packageToDict(packages):
    newPackagesList = []
    tempNewPackages = []
    #print(packages)
    for pack in packages:
        if pack == '\n':
            print(tempNewPackages)
            tempNewPackagesDict = dict(tempNewPackages)
            newPackagesList.append(tempNewPackagesDict)
            tempNewPackages.clear()
        else:
            temppack = pack.replace("\n", "").replace(" ", "").split(":")
            #多：矫正
            if len(temppack) > 2:
                i = 0
                a = temppack[0]
                tempStr = ''
                for b in temppack:
                    i = i + 1
                    if b == a:
                        continue
                    else:
                        tempStr = tempStr +':'+ b
                temppack = [a,tempStr]     
            tempNewPackages.append(temppack)
    print(newPackagesList)
    return newPackagesList
        
def packagesDictListToJson(packagesDictList):
    for packagesDict in packagesDictList:
        try:
            Depends = packagesDict['Pre-Depends']
        except:
            Depends = "无"
        packageJsonBase ={
        "name": packagesDict['Name'],
        "package": packagesDict['Package'],
        "author": packagesDict['Author'],
        "version": packagesDict['Version'],
        "dependency": Depends,
        "minOSVersion": "9.0",
        "maxOSVersion": "13.3.1",
        "otheriOS": "untested",
        "description": packagesDict['Description'],
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
        packageJson = json.dumps(packageJsonBase,ensure_ascii=False)
        print(packageJson)
        file = open("depictions\packages\\"+packagesDict['Package']+".json",'w',encoding='utf-8')
        file.writelines(packageJson)
        file.close

def main():
    packages = openPackage(packagesFile)
    packagesDictList = packageToDict(packages)
    packagesDictListToJson(packagesDictList)

if __name__ == "__main__":
    main()
