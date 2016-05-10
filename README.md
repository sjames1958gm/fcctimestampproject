Free Code Camp Backend project.

User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

Sample:

https://fcctimestampproject-silgarth.c9users.io/dec%209%201958

{
"unix": -349142400000,
"natural": "December 9, 1958"
}

https://fcctimestampproject-silgarth.c9users.io/fred

{
"unix": null,
"natural": null
}