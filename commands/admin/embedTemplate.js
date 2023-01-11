/*

embed
.setColor(0x3498DB)
.setAuthor("")
.setTitle("This is your title, it can hold 256 characters")
.setURL("https://discord.js.org/#/docs/main/stable/class/embedbuilder")
.setDescription("This is the main body of text, it can hold 4096 characters.")
.setImage("http://i.imgur.com/yVpymuV.png")
.setThumbnail("http://i.imgur.com/p2qNFag.png")
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)

	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)

.addField('\u200b', '\u200b' )

.setTimestamp()
.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png");

message.channel.send({ embeds: [embed] });

*/