const Discord = require("discord.js")
const client = new Discord.Client({
    intents: 32767
})

client.login(process.env.token)

client.on('ready', () => {
    client.user.setActivity('!saky', { type: "PLAYING" }); 
    });
    client.on('ready', () => {
        client.user.setActivity('i/help', { type: "PLAYING" }); 
        client.user.setStatus('ONLINE') //Oppure idle, dnd, invisible
    })


client.on("ready", () => {
    console.log("Bot Online")
})

const ms = require("ms")

client.on("messageCreate", (message) => {
    if(message.content == "i/help") {
       message.channel.send("Ehi quarda i messaggi! Ti ho risposto in privato.").then(msg => {
        setTimeout(() => msg.delete(), 5000)
     })

    }

    if(message.content == "i/novità") {
        var embedNovitàNulla1 = new Discord.MessageEmbed()
        .setTitle("Errore! 404")
        .setDescription("Inserisci un'azione valida (i/novità id) con comand,")
        .setColor("LIGHT_GREY")

        message.channel.send({embeds: [embedNovitàNulla1]})
    }

    if(message.content == "i/novità comandi") {
        var embedNovitàComandi = new Discord.MessageEmbed()
        .setTitle("Ecco le novità dei comandi!")
        .setDescription("Ora i comansi del bot sono con il prefisso sia maiuscolo che minuscolo! (ancora in lavorazione)")

        message.channel.send({embeds: [embedNovitàComandi]})
    }

    if(message.content == "I/novità comandi") {
        message.channel.send("Ecco qua le novità sui comandi: I comandi sono ora sia col prefisso maiuscolo che minuscolo!")
    }

    if(message.content == "I/novità") {
        var embedNovitàNulla2 = new Discord.MessageEmbed()
        .setTitle("Ecco le novità Comandi!")
        .setDescription("I comandi sono ora sia col prefisso maiuscolo che minuscolo!")
        .setColor("LIGHT_GREY")

        message.channel.send({embeds: [embedNovitàNulla2]})
    }



    if(message.content == "I/help") {
        message.channel.send("Ehi quarda i messaggi! Ti ho risposto in privato.").then(msg => {
         setTimeout(() => msg.delete(), 5000)
      })
 
     }

    if(message.content == "i/ciao") {
       message.channel.send("Ciao!") 
    }

    if(message.content == "i/tiktok") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Tik Tok")
            .setDescription(`${message.author.username} Ehi! Seguici su TikTok: https://www.tiktok.com/@ironmc_9`)
            .setThumbnail("https://loghi-famosi.com/wp-content/uploads/2020/04/TikTok-Logo.png")

        message.channel.send({embeds: [embed]})
    }

    if(message.content == "I/tiktok") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Tik Tok")
            .setDescription(`${message.author.username} Ehi! Seguici su TikTok: https://www.tiktok.com/@ironmc_9`)
            .setThumbnail("https://loghi-famosi.com/wp-content/uploads/2020/04/TikTok-Logo.png")

        message.channel.send({embeds: [embed]})
    }

    if(message.content == "i/social") {
        message.channel.send("Ecco i nostri social!")
        
    }

    if(message.content == "i/help") {
        var embedHelp = new Discord.MessageEmbed()
        .setTitle("Hai bisogno di aiuto?")
        .setDescription("Hai bisogno di aiuto? Apri un ticket nel nostro server e ti aiuteranno gli staf! vai nel canale <#936543344727826442>")
        .setColor("LIGHT_GREY")

        message.author.send({ embeds: [embedHelp]})
    }

    if(message.content == "i/texture") {
        var embedTexture = new Discord.MessageEmbed()
        .setTitle("Ecco qua il link di download della nostra texture!")
        .setDescription("Ecco qua il link di download della nostra texture! https://drive.google.com/uc?export=download&id=1gsHKyMqFvcX2q7Ih4wyL1QObBPnp_t-H Versione 1.18.1 (creata da <@826787821498794004>)")
        .setColor("LIGHT_GREY")

        message.author.send({ embeds: [embedTexture]})
    }

    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("idRuolo1") || message.member.roles.cache.has("idRuolo2")) return

    var parolacce = ["coglione", "cazzo", "vaffanculo"]
    var trovata = false;
    var testo = message.content;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })

    if (trovata) {
        message.delete();
        var embedParolaccia = new Discord.MessageEmbed()
            .setTitle("Hai detto una parolaccia")
            .setDescription("Hai scritto un messaggio con parole bloccate\rIl tuo messaggio: " + testo)

        message.channel.send({ embeds: [embedParolaccia] })
    }

    if (message.content == "i/ping") {
        var embedPing = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)

        message.channel.send({embeds: [embedPing]})
    }

    if (message.content.startsWith("i/ban")) {
        var utenteBan = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utenteBan) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utenteBan.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utenteBan.ban()
            .then(() => {
                var embedBan = new Discord.MessageEmbed()
                    .setTitle(`${utenteBan.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embedBan] })
            })
    }

    if (message.content.startsWith("i/kick")) {
        var utenteKick = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utenteKick) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utenteKick.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utenteKick.kick()
            .then(() => {
                var embedKick = new Discord.MessageEmbed()
                    .setTitle(`${utenteKick.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embedKick] })
            })
    }

    if (message.content.startsWith("i/userinfo")) {
        if (message.content == "!userinfo") {
            var utenteInfo = message.member;
        }
        else {
            var utenteInfo = message.mentions.members.first();
        }
        if (!utenteInfo) {
            return message.channel.send("Non ho trovato questo utente")
        }
        var elencoPermessi = "";
        if (utenteInfo.permissions.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS_AND_STICKERS", "USE_APPLICATION_COMMANDS", "REQUEST_TO_SPEAK", "MANAGE_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS", "USE_EXTERNAL_STICKERS", "SEND_MESSAGES_IN_THREADS", "START_EMBEDDED_ACTIVITIES"]
            for (var i = 0; i < permessi.length; i++)
                if (utenteInfo.permissions.has(permessi[i]))
                    elencoPermessi += `- ${permessi[i]}\r`
        }
        var embedUserInfo = new Discord.MessageEmbed()
            .setTitle(utenteInfo.user.tag)
            .setDescription("Tutte le info di questo utente")
            .setThumbnail(utenteInfo.user.displayAvatarURL())
            .addField("User id", utenteInfo.user.id, true)
            .addField("Status", utenteInfo.presence ? utente.presence.status : "offline", true)
            .addField("Is a bot?", utenteInfo.user.bot ? "Yes" : "No", true)
            .addField("Account created", utenteInfo.user.createdAt.toDateString(), true)
            .addField("Joined this server", utenteInfo.joinedAt.toDateString(), true)
            .addField("Permissions", elencoPermessi, false)
            .addField("Roles", utenteInfo.roles.cache.map(ruolo => ruolo.name).join("\r"), false)
        message.channel.send({ embeds: [embedUserInfo] })
    }

    if (message.content.startsWith("i/clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        var count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }

    if (message.content.startsWith("i/say")) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un messaggio");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        //Embed
        var embedSay = new Discord.MessageEmbed()
            .setTitle(testo)

        message.channel.send({embeds: [embedSay]})
    }

    if (message.content.startsWith("i/slowmode")) {
        var time = message.content.split(/\s+/)[1];
        if (!time) {
            return message.channel.send("Inserire un tempo valido")
        }

        time = ms(time)
        if (!time && time != 0) {
            return message.channel.send("Inserire un tempo valido")
        }

        if (time > 21600000) {
            return message.channel.send("Inserire un tempo non superiore a 6 ore")
        }

        message.channel.setRateLimitPerUser(parseInt(time) / 1000)
        message.channel.send("Slowmode impostata")
    }

    if(message.content == "i/comandi") {
        var embedComandi = new Discord.MessageEmbed()
        .setTitle("Ecco i comandi del bot accessibili a tutti")
        .setDescription("- i/help; - i/userinfo; - i/texture; - i/tiktok;")
        .setImage("https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200523233216")
        .setColor("LIGHT_GREY")
        
        message.author.send({ embeds: [embedComandi]})
    }

    if(message.content == "i/provino") {
        message.channel.send("Inserisci un provino valido. Scegli tra admin o helper")
    }

    if(message.content == "i/provino admin") {
        message.author.send("Ecco il provino per gli admin: (in arrivo)")
    }

    if(message.content == "i/provino helper") {
        message.author.send("Ecco il provino per gli helper : https://docs.google.com/forms/d/e/1FAIpQLSd2MHIgnWGpnQbiS2GELBtuhoF4z89kGjBw9hCO-t36NpKrEg/viewform?usp=sf_link")
    }


})

client.on("guildMemberAdd", member => {
    var embedBenvenuto = new Discord.MessageEmbed()
        .setTitle("Benvenuto!!!")
        .setDescription(`Ciao ${member.toString()}, benvenuto in ${member.guild.name}. Sei il **${member.guild.memberCount}° Membro**`)
        .setColor("LIGHT_GREY")

    client.channels.cache.get("934378127252131873").send({embeds: [embedBenvenuto]});
})

client.on("guildMemberRemove", member => {
    var embedAddio = new Discord.MessageEmbed()
        .setTitle("Addio")
        .setDescription(`Ciao ${member.toString()}, ci rivediamo presto qua in ${member.guild.name}`)
        .setColor("LIGHT_GREY")

    client.channels.cache.get("934378127252131873").send({embeds: [embedAddio]}); 
})

client.on("messageCreate", async message => {
    if (message.content.startsWith("i/unban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }

        var args = message.content.split(/\s+/);
        var IdUtenteUnban = args[1]

        if (!IdUtenteUnban) {
            return message.channel.send("Non hai scritto l'id di nessun utente");
        }

        message.guild.members.unban(IdUtenteUnban)
            .then(() => {
                var embedUnban = new Discord.MessageEmbed()
                    .setTitle("Utente sbannato")
                    .setDescription("Questo utente è stato sbannato")

                message.channel.send({ embeds: [embedUnban] })
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "936543050702925865", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "934378717810147328",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send("Grazie per aver aperto un ticket")
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "i/ticketclose") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("i/useradd")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("i/userremove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso dal ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})