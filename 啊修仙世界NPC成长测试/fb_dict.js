var d = [
    "创世魅木带",
    "平纹幻日爪",
    "日扬重芽罩",
    "溷元玄皇镖",
    "凤翔新铁尺",
    "狂澜梦甲锥",
    "光明窄琉镯",
    "无间狭骨箭",
    "寒泉小蕊斧",
    "黑布狭叶钯",
    "百花幽焱幡",
    "凌霄闇神棒",
    "化生龙啸卷",
    "摧心破啸瓶",
    "龙舞仙水挝",
    "金蝉破晶盾",
    "猎杀光日旗",
    "千机狭灵笔",
    "流星暗电节",
    "天傲锋革罩",
    "散夜闇藤琴",
    "烁金影精匕",
    "照空龙缕旗",
    "雷音鬼石琴",
    "直传粗岩节",
    "风炎魔牙塔",
    "狂沙宽玉印",
    "凌绝锋氤鎚",
    "陀罗直绸钉",
    "断日轻睛罩",
    "光龙锐男剑",
    "霜华魔眼镜",
    "飘雪明波鼓",
    "寒天细钢灯",
    "斩龙硬凰令",
    "幻波锐鬼镯",
    "战龙精琉剪",
    "血魔秘革牌",
    "长虹钝鬼珠",
    "飞鱼宽女瓶"
]

function huoqusuijishu(length_int){

    var random_int = Math.floor(Math.random() * length_int)

    return random_int
}

// 功法 和 法宝 加起来 就可以越阶级 杀人的 话 ，要这么定义？

for(i = 0; i< d.length; ++i){
    var str2 = "\"" + d[i] + "\"" + ":" + huoqusuijishu(100)

    console.log(str2);

}