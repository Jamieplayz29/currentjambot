/*

embed
.setColor(0x3498DB)
.setAuthor("")
.setTitle("This is your title, it can hold 256 characters")
.setURL("https://discord.js.org/#/docs/main/stable/class/embedbuilder")
.setDescription("This is the main body of text, it can hold 4096 characters.")
.setImage("http://i.imgur.com/yVpymuV.png")
.setThumbnail("http://i.imgur.com/p2qNFag.png")
.addField("This is a single field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")

.addFields(
  { name: "Inline fields", value: "They can have different fields with small headlines, and you can inline them.", inline: true },
  { name: "Masked links", value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/EmbedBuillder) inside of rich embeds.", inline: true },
  { name: "Markdown", value: "You can put all the *usual* **__Markdown__** inside of them.", inline: true }
)

.addField('\u200b', '\u200b' )

.setTimestamp()
.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png");

message.channel.send({ embeds: [embed] });

*/