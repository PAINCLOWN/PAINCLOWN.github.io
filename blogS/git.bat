@echo off
@title bat ����ִ��git����
cd %~d0
cd %cd%
git add .
git commit -m %date:~0,4%��%date:~5,2%��%date:~8,2%��