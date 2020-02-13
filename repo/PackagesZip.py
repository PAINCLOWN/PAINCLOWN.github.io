# encoding:utf-8
'''
PAINCLOWN-script
'''
import bz2
import lzma

file = open('Packages',"r",encoding='utf-8')
Packages = file.read().encode('utf-8')
file.close()
#print(Packages)
#########bz2#############
print('bz2 ing ···')
Packagesbz2 = bz2.BZ2File("Packages.bz2","w")
Packagesbz2.write(Packages)
Packagesbz2.close()
#########lzma#############
print('lzma ing ···')
Packagesxz = lzma.LZMAFile("Packages.lzma","w")
Packagesxz.write(Packages)
Packagesxz.close()
#########xz#############
print('xz ing ···')
Packagesxz = lzma.LZMAFile("Packages.xz","w")
Packagesxz.write(Packages)
Packagesxz.close()

print('zip end')