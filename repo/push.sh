#!/bin/bash
chmod -R 0755 ./
dpkg-scanpackages ./debs > Packages
bzip2 -fks Packages
