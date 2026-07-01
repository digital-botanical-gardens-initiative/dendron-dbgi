

# This is PMA's DBGI daily open-notebook.

Today is 2023.07.26

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

Meeting OpenBis

Catherina, Henry, Juan Fuentes

Design of the storage.

One layer is missing.
The rack layer

Attach barcodes to everything.



Is the approach described in https://datascience.codata.org/articles/10.5334/dsj-2021-011 suitable for the DBGI project.

- discussion obout models and processes

- Data models : 
not only specific by field but also by the research 
semantic annotation 

https://metadatacenter.org/
https://dwc.tdwg.org/


Problem : 

1- semantic annotation
2- how do you feed the model


https://www.dissco.eu/

https://en.wikipedia.org/wiki/Universally_unique_identifier
https://community.airtable.com/t5/base-design/how-to-create-a-unique-id-using-a-formula-in-the-primary-field/td-p/69008


Words of WilliamPorter are worth reading
> 
> 
> “Match columns” vs Key columns
> In relational database systems, data in different tables is always linked when a value in a column in one table precisely matches a corresponding value in a column in the other table. In some platforms these are called “match fields” (“match columns”). Most of the time database developers like me call these “key” fields. But there may be a useful distinction between “match columns” and “key columns”.
> 
> As I said, keys should be unique (within their table) and immutable; and I went on to say that one of the ways you make a key value immutable is by making it meaningless outside the database. Properly generated keys tend to look like this: “UmNygMQcY1twgeD9r”.
> 
> The problem is, precisely because good key values are meaningless to us humans, it’s rather awkward for us to use them. We don’t like to look at values like UmNygMQcY1twgeD9r, we find it extremely hard to pick UmNygMQcY1twgeD9r out of a list that also includes rMqkwlLC5eMx77Hsp etc. Your eyes are probably getting blurry reading this paragraph. :slightly_smiling_face:
> 
> This is why Airtable hides these values from us. Instead, in Airtable we get what I would call match fields. When a new order comes in, we switch to a view of the Orders table, click into the Accounts column (which is a Link to Another Table column) and Airtable shows us a list of known accounts, by name, so it’s easy for us to pick the right one. Behind the scenes, of course, meaningless key values are being used to link the order to the account, but we don’t see any of that.
> 
> So the match field is the meaningful token that allows us human beings to use the base; but invisible, meaningless key values are used to make the actual links between tables. And because that’s the case, if we change the name of the Acme account from Acme Inc to Acme Industries LLP, none of the links between Acme and its orders get broken. The invisible, meaningless IDs did not change.
> 
> .
> 
> Match values not always unique!
> Now, here’s where it gets tricky. Primary keys (i.e. the key values in the One tables) must be unique. But the column we most naturally use as a match column sometimes will include duplicates, or more precisely, not “duplicates” but rather, values that are not unique. (This is an important distinction. The result of 2 + 5 is the same as the result of 4 + 3, but the first 7 is not a “duplicate” of the second 7. They’re just both 7s.)
> 
> I build systems in which the top level table in the hierarchy is almost always a list of people–typically, hundreds or thousands of people. I see a lot of this sort of thing:
> 
> Candace Moreno
> Carlos Garcia
> Carlos Garcia
> Catherine Lawrence
> Sometimes we can determine that the first Carlos Garcia is actually Carlos Garcia, Sr., and the second one is Carlos Garcia, Jr. That helps. But we can’t always do this. Or perhaps we have middle names–but often we don’t. Sometimes you just have two or more records with identical names.
> 
> Once we are able to figure out that it’s the first Carlos Garcia that we want, then the link between him and (say) the rows in the Orders table that belong to him will be made using the invisible key values, and everything is fine from that point on. But Which Carlos Garcia? is a question that occurs a lot, in Airtable and in other database systems as well. It’s a big deal for example when you Google a name like “John Adams”, or when you look for a name in the huge database known as Wikipedia. See for example this page which attempts to “disambiguate” the name John Adams.
> 
> So we tend to create meaningful distinguishers to help us keep things apart. In my systems I’ll often write a calc that puts the first name, middle name, last name, name suffix and birth date into a single column. So users can see something like this:
> 
> Carlos M Garcia (4/1/1980)
> Carlos Garcia, Sr. (8/18/1968)
> These are easy calcs to write. In Airtable, we’ll often write a calc like this and use it as the primary column for the table. If you’re dealing with a table where every record = a person, and the name and birthdate are not reliably distinct, you might have to add some other column like Zip Code or drivers license number or whatever you’ve got. Then when you link to that person’s record from a Many table, in Airtable the “Link to Another Table” will use that calculated column as the match column.
> 
> I suspect this may be exactly what you need to do in your system. Create a primary column that is a formula field containing several values that give you a unique result.
> 
> .
> 
> But the key values are always the most important thing!
> Still, it’s always the hidden key values that do the real linking. So if your base includes, say, three or four or five tables (not just two), and you’re implementing the suggestions I gave you earlier about using the RECORD_ID() function to get primary key values out into the open, then you just need to do the same thing for all the tables in your base. In other words, in every table, a field named Record_ID that gets that row’s primary key value, and also in every Many or “Child” table, a field named something like Parent_Record_ID that looks up the Record_ID value from the linked parent record.
> 
> Then if you export your multi-table base’s data to another system, you make sure to export those key columns as well.
> 
> .
> 
> Too much work?
> Yeah, it’s a little bit of work. But you don’t have to worry about the key columns at all if your system is never going to leave Airtable. And while we often do have to create those “disambiguated” primary column calculations, they not too hard.
> 
> The truth is, Airtable isn’t really all that easy, once you go beyond grocery lists. But the same can be said of every database system I know, and I’m familar with quite a few.



## Paused

## Done

## Notes

## Todo tomorrow

###
###
###


## Today I learned that

-