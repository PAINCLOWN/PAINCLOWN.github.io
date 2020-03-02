# encoding:utf-8

'''
http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh_CN&q=XXXXXXX

('Google的免费服务可立即在英语和其他100多种语言之间翻译单词，词组和网页', 'zh-CN')

('Google的免费服务可立即在英语和其他100多种语言之间翻译单词，词组和网页。', 'en')
'''
import requests
import json
import time
import random

#随机ip
def random_ip():
    a = random.randint(1, 255)
    b = random.randint(1, 255)
    c = random.randint(1, 255)
    d = random.randint(1, 255)
    return (str(a) + '.' + str(b) + '.' + str(c) + '.' + str(d))

def translate(Str):
    '''
    传入字符串自动检测语言谷歌翻译返回中文和翻译原语言
    '''
    newStr = ''
    lang = ''
    request = ''
    headers = {'Accept-Language': 'zh-CN,zh;q=0.9',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
                        'X-Forwarded-For': random_ip(),
                        'Connection': 'close'}
    GoogleTranslateUrl = 'http://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&sl=auto&tl=zh_CN&q=' + Str
    for i in range(10):
        request = requests.get(GoogleTranslateUrl,headers=headers)
        #print(request.content)
        if request.status_code == 200:
            requestJson = json.loads(request.content,strict=False)
            newStr = requestJson['sentences'][0]['trans']
            #print(newStr)
            lang = requestJson['ld_result']['extended_srclangs'][0]
            #print(lang)
            break
        else:
            count = i*10
            print('被谷歌查水表，小黑屋时间~:%ss' % count)
            time.sleep(count)
    if request.status_code != 200:
            print('重试依旧异常，return Str，google code：%s' % request.status_code)
            newStr = Str
            lang = 'zh-CN'

    return(newStr,lang)


def main():
    print(translate("Google的免费服务可立即在英语和其他100多种语言之间翻译单词，词组和网页"))

if __name__ == "__main__":
    main()