pip install pydpkg
python dpkg-scanpackages.py -o Packages debs
python autoDepictions.py
python PackagesZip.py
pause