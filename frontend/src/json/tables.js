export const optionsArray = {
    adminlog : ["time", "admin", "action", "player", "По всему логу"],
    arrestlog : ["time", "player", "target", "reason", "stars", "pnick", "tnick", "По всему логу"],
    banlog : ["time", "player", "admin", "reason", "login", "until", "ishard", "По всему логу"],
    deletelog: ["time", "uuid", "name", "account", "bank", "По всему логу"],
    eventslog: ["id", "AdminStarted", "AdminClosed", "EventName", "Members", "MembersLimit", "Winner", "Reward", "RewardLimit", "Started", "Ended", "По всему логу"],
    fraclog: ["time", "frac", "player", "target", "pname", "tname", "action", "По всему логу"],
    idlog: ["in", "out", "uuid", "id", "name", "sclub", "hwid", "ip", "login", "По всему логу"],
    itemslog: ["time", "from", "to", "type", "amount", "data", "По всему логу"],
    moneylog: ["time", "from", "to", "amount", "comment", "По всему логу"],
    namelog: ["time", "uuid", "old", "new", "По всему логу"],
    stocklog: ["time", "frac", "uuid", "name", "type", "amount", "in", "По всему логу"],
    ticketlog: ["time", "player", "target", "sum", "reason", "pnick", "tnick", "По всему логу"],
    killlog: ["time", "killer", "weapon", "victim", "pos", "По всему логу"],
    accounts: ["login", "email", "hwid", "socialclub", "redbucks", "viplvl", "vipdate", "promocodes", "bonuscodes", "character1", "character2", "character3", "characters", "present", "По всему логу"],
    characters: ["uuid", "firstname", "lastname", "gender", "health", "armor", "lvl", "exp", "money", "bank", "work", "fraction", "fractionlvl", "drugaddi", "arrest", "demorgan", "wanted", "biz", "adminlvl", "licenses", "unwarn", "unmute", "warns", "lastveh", "onduty", "lasthour", "hotel", "hotelleft", "contacts", "achiev", "sim", "PetName", "pos", "createdate", "time", "refcode", "По всему логу"],
    banned: ["time", "name", "account", "until", "ishard", "ip", "socialclub", "hwid", "reason", "byadmin", "rgscemailhash", "По всему логу"],
    houses: ["id", "owner", "type", "position", "price", "locked", "garage", "bank", "По всему логу"],
    items_data: ["auto_id", "data_id", "item_id", "item_count", "item_data", "location", "slotid", "По всему логу"],
    questions: ["ID", "Author", "Question", "Respondent", "Response", "Opened", "Closed", "Status", "По всему логу"],
    fractions: ["ID", "Drugs", "Mats", "Medkits", "Money", "Lastserial", "Weapons", "isopen", "fuellimit", "fuelleft", "По всему логу"],
    business: ["ID", "owner", "sellprice", "type", "products", "enterpoint", "unloadpoint", "money", "mafia", "orders", "По всему логу"],
    vehicles: ["number", "holder", "model", "health", "fuel", "price", "items", "components", "position", "rotation", "keynum", "dirt", "По всему логу"],
    money: ["id", "type", "holder", "balance", "По всему логу"],
    promocodes_new: ["promo", "createdby", "used", "rewardrecieved", "rewardlimit", "msg_r", "money_r", "vip_r", "vipdays_r", "items_r", "По всему логу"],
    bonuscodes: ["code", "used", "limit", "msg_r", "exp_r", "money_r", "vip_r", "vipdays_r", "itemsm_r", "itemsf_r", "По всему логу"],
}

export const navType = {
    log: 0,
    basic: 1,
}

export const navArray = [
    {
        nav: "adminlog",
        type: navType.log,
        name: "Лог администрации"
    },
    {
        nav: "arrestlog",
        type: navType.log,
        name: "Лог арестов"
    },
    {
        nav: "banlog",
        type: navType.log,
        name: "Лог банов"
    },
    {
        nav: "deletelog",
        type: navType.log,
        name: "Лог удаленных персонажей"
    },
    {
        nav: "eventslog",
        type: navType.log,
        name: "Лог админ мероприятий"
    },
    {
        nav: "fraclog",
        type: navType.log,
        name: "Лог фракций"
    },
    {
        nav: "idlog",
        type: navType.log,
        name: "Лог входов"
    },
    {
        nav: "itemslog",
        type: navType.log,
        name: "Лог предметов"
    },
    {
        nav: "moneylog",
        type: navType.log,
        name: "Лог денег"
    },
    {
        nav: "namelog",
        type: navType.log,
        name: "Лог смены ников"
    },
    {
        nav: "stocklog",
        type: navType.log,
        name: "Лог складов"
    },
    {
        nav: "ticketlog",
        type: navType.log,
        name: "Лог штрафов"
    },
    {
        nav: "killlog",
        type: navType.log,
        name: "Лог убийств"
    },
    {
        nav: "accounts",
        type: navType.basic,
        name: "База аккаунтов"
    },
    {
        nav: "characters",
        type: navType.basic,
        name: "База персонажей"
    },
    {
        nav: "banned",
        type: navType.basic,
        name: "Лог банов"
    },
    {
        nav: "houses",
        type: navType.basic,
        name: "База домов"
    },
    {
        nav: "items_data",
        type: navType.basic,
        name: "База предметов"
    },
    {
        nav: "questions",
        type: navType.basic,
        name: "Лог репортов"
    },
    {
        nav: "fractions",
        type: navType.basic,
        name: "База складов фракций"
    },
    {
        nav: "business",
        type: navType.basic,
        name: "База бизнесов"
    },
    {
        nav: "vehicles",
        type: navType.basic,
        name: "База транспорта"
    },
    {
        nav: "money",
        type: navType.basic,
        name: "Лог денежных операций"
    },
    {
        nav: "promocodes_new",
        type: navType.basic,
        name: "База промокодов"
    },
    {
        nav: "bonuscodes",
        type: navType.basic,
        name: "База бонускодов"
    },
    
]

export const symbolsArray = [
    {
        name: "Не выбрано",
        symbol: false
    },
    {
        name: "Равно",
        symbol: "="
    },
    {
        name: "Больше",
        symbol: ">"
    },
    {
        name: "Меньше",
        symbol: "<"
    },
    {
        name: "Больше или равно",
        symbol: ">="
    },
    {
        name: "Меньше или равно",
        symbol: "<="
    },
    {
        name: "Не равно",
        symbol: "!="
    },
    {
        name: "Содержит",
        symbol: "like"
    },
    {
        name: "Не содержит",
        symbol: "notlike"
    },
    {
        name: "Дата равна",
        symbol: "date"
    },
]