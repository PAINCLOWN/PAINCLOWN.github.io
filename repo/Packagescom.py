encode:"utf-8"
'''
PAINCLOWN-script
'''
import bz2
import lzma

file = open('Packages',"r")
Packages = file.read().encode('utf-8')
file.close()
print(Packages)
#########bz2#############
Packagesbz2 = bz2.BZ2File("Packages.bz2","w")
Packagesbz2.write(Packages)
Packagesbz2.close()
#########lzma#############
Packagesxz = lzma.LZMAFile("Packages.lzma","w")
Packagesxz.write(Packages)
Packagesxz.close()
#########xz#############
Packagesxz = lzma.LZMAFile("Packages.xz","w")
Packagesxz.write(Packages)
Packagesxz.close()