># Curse_filter
>## 욕설 필터링

> Database
> create table filters
> (
>     word   varchar(255)       not null,
>     result varchar(255)       not null,
>     count  int(255) default 0 not null,
>     constraint filters_word_uindex
>         unique (word)
> );

대충 
word, result만 있으면 되고
filter(str)의 str이 word와 일치하다면 result으로 바꿔주는 js
