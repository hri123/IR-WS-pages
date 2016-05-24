(function() {


/*

Doug McIlroy
myFunc() {
 tr -cs A-Za-z '\n' |
 tr A-Z a-z |
 sort |
 uniq -c |
 sort -rn |
 sed ${1}q
}


man -k editor

info coreutils

man 5 crontab


less abc.log


tab - autocomplete


(using vi commands on command prompt)
set -o vi

type Esc to go to the vi navigation

Ctrl R to search the previous commands and Ctrl R to cycle thro the results too

(also can find using the history command and grep for what you want)

toggle directories cd -

!! - last command

!cat - last command starting with cat

!?cat - last command containing cat

^cat^meow - replace cat in last command with meow

fc - brings last command in editor

ls -lht - readable size


ln - link to dir
alias - to give a shorter name to a long command

make -p
touch


clear


.bash_profile


sleep 100 &

jobs

fg %1

what if you forget to type &
press Ctrl Z
and then type bg
(for softlayer tunnel may be)

kill

pgrep bash -> find processes with bash


[hrikumar@docker-olymp ~]$ echo one two three
one two three
[hrikumar@docker-olymp ~]$ echo !*
echo one two three
one two three
[hrikumar@docker-olymp ~]$ echo !$
echo three
three
[hrikumar@docker-olymp ~]$ echo !^
echo three
three


[hrikumar@docker-olymp ~]$ echo mv xxx{,.bak}
mv xxx xxx.bak


/dev/pts/0 -> screen

grep "ssh" invalid_file > /dev/null 2>&1

grep -i 'ipv4' /var/log/boot.log


find /home -type f -user student -nmin -5 -size -10k

find . -type f -exec ls -l {} \;

find something and search inside these files:
xargs - takes the output from previous command and appends to end of next command
find . -type f -name '*.txt' | xargs grep -i "hello"

// change delimiter to null characters instead of newlines
find . -type f -name '*.txt' -print0 | xargs -0 grep -i "hello"


tail -f xxx | grep -i "content"
it outputs in real time, and print only the required lines by grepping


*/

})();
