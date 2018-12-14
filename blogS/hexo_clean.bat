@echo off
cd %~d0
cd %cd%
del %cd%\public /q
hexo clean
s