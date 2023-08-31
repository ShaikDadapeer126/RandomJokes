// elements.innetHTML is used to populate a div with HTMl. Search online about this method and create a website with a div tag
// containing a random joke given an array of jokes. Use math.random & fetch jokes from the interent (use any website to create
// the array) your website should show a random joke on every reload min length of your jokes array should be 1.

{/* <style>
    *{
    margin: 0;
    padding: 0;
    }
    #jokes{
    background-color: red;
    text-align: center;
    font-size: xx-large;
    }
</style>
<html> 
    <div id="jokes">
        This is the sample JOKES
    </div>
</html> */}
  
{/* <sctipt>

    let Myjokes = [
        {
            "category": "Programming",
            "type": "single",
            "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 45,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging: Removing the needles from the haystack.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 40,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 28,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 27,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 57,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 4,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 0,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 9,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 55,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The generation of random numbers is too important to be left to chance.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 39,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "I'm sure good looking lesbians look at fat lesbians and give them no chance.",
            "delivery": "Until they see their fingers.",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 164,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "Two peanuts were walking.",
            "delivery": "One was assaulted.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 169,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "Why did the koala get rejected?",
            "delivery": "Because he did not have any koalafication.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 192,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "I was walking down the street and saw some black guy on a bike and it looked just like mine so I ran home to check.",
            "delivery": "Thankfully he was still chained up in my basement.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 124,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "People are like jellybeans and licorice:",
            "delivery": "No one likes the blacks.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 100,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "Why do German showers have 11 holes?",
            "delivery": "Because Jews only have 10 fingers.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 108,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "What did one necrophiliac tell the other necrophiliac after work?",
            "delivery": "\"Let's go have a couple of cold ones!\"",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 115,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "How long does a black woman take to throw away the garbage?",
            "delivery": "Nine months.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": true
            },
            "id": 104,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "This morning I accidentally made my coffee with Red Bull instead of water.",
            "delivery": "I was already on the highway when I noticed I forgot my car at home.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 146,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "What's the difference between a hot potato and a flying pig?",
            "delivery": "One's a heated yam, the other's a yeeted ham.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 141,
            "safe": true,
            "lang": "en"
        }
    ]
    let index = Math.floor(Math.random()*(Myjokes.length-1))
    console.log(index)
    jokes.innerHTML = Myjokes[index].joke
</sctipt> */}