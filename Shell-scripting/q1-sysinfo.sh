#!/bin/bash
#script name:q1-sysinfo.sh
#shell script that displays system information

#get username
current_user=$(whoami)

#get current date in day,month,date,year format
current_date=$(date +"%a %b %d %Y")

#get current time in hour, minute, seconds format
current_time=$(date +"%H:%M:%S")

#get home directory path
home_dir=$HOME

#get current working directory
current_wd=$(pwd)

#to count number of files in current diirectory
#ls-1 lists one file at a time while wc-l counts the lines
file_count=$(ls -1| wc -l)

#display report
echo "SYSTEM INFORMATION REPORT"
echo "Current User: $current_user"
echo "Current Date: $current_date"
echo "Current Time: $current_time"
echo "Home Directory: $home_dir"
echo "Current Working Directory: $current_wd"
echo "Number of Files in Current Directory: $file_count"




