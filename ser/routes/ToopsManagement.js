var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var StableTroops = require('../public/models/Stable');
var STroops = mongoose.model('STroops',StableTroops);
var WorkShopTroops = require('../public/models/WorkShop');
var WTroops = mongoose.model('WTroops',WorkShopTroops);
var BarracksTroops = require('../public/models/Barracks');
var BTroops = mongoose.model('BTroops',BarracksTroops);
var Stat = require('../public/models/Statistics');
var Stats= mongoose.model('Statistics',Stat);
var Reinforcement = require('../public/models/Reinforcement');
var Reinf = mongoose.model('reinfs',Reinforcement);
var Reg = require('../public/models/RegNames');
var RegNames= mongoose.model('RegNames',Reg);
var ST = require('../public/models/SecondrayTroops');
var SecTroops=mongoose.model('SecTroops',ST);
var Notification= require('../public/models/Notification');
var Notific = mongoose.model('Notifications',Notification);
var BuildingLevelSchema = require('../public/models/BuildingLevels');
var BuildLevel = mongoose.model('BuildLevels',BuildingLevelSchema);

router.post('/Attack',function (req,res) {
    RegNames.find({PlayerName:req.body.PlayerName1},function (err,data) {
        if(data[0] != null) {
            var WTlvl;
            BuildLevel.find({'PlayerName': req.body.PlayerName1},function (err,data) {
                WTlvl=data[0].WatchTower + 1;
                console.log(WTlvl);
                var troop1, troop2, troop3, troop4, troop5, troop6, troop7, troop8, troop9;
                var t1a, t2a, t3a, c1a, c2a, c3a, w1a, w2a, w3a;
                var troop11, troop22, troop33, troop44, troop55, troop66, troop77, troop88, troop99;
                var t11d, t22d, t33d, c11d, c22d, c33d, w11d, w22d, w33d;
                var t11,t22,t33,t44,t55,t66,t77,t88,t99;
                var Name1 = req.body.PlayerName, Name2 = req.body.PlayerName1;

                var t1 = req.body.t1, t2 = req.body.t2, t3 = req.body.t3, t4 = req.body.t4, t5 = req.body.t5,
                    t6 = req.body.t6, t7 = req.body.t7, t8 = req.body.t8, t9 = req.body.t9;

                BTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                    troop1 = data[0].t1count, troop2 = data[0].t2count, troop3 = data[0].t3count;
                    STroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                        troop4 = data[0].s1count, troop5 = data[0].s2count, troop6 = data[0].s3count;
                        WTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                            troop7 = data[0].w1count, troop8 = data[0].w2count, troop9 = data[0].w3count;


                if(troop1>=t1 & troop2>=t2 & troop3>=t3 & troop4>=t4 & troop5>=t5 & troop6>= t6 & troop7>= t7 & troop8>=t8 & troop9>=t9) {


                    BTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                        troop1 = data[0].t1count, troop2 = data[0].t2count, troop3 = data[0].t3count;
                        console.log(t1, t2, t3);
                        t1a = data[0].t1attack, t2a = data[0].t2attack, t3a = data[0].t3attack;
                        var conditions = {PlayerName: req.body.PlayerName},
                            update = {
                                t1count: troop1 - t1,
                                t2count: troop2 - t2,
                                t3count: troop3 - t3
                            }, options = {multi: true};
                        BTroops.update(conditions, update, options, function (err, data1) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log(data1);
                            }
                        });
                        BTroops.find({'PlayerName': req.body.PlayerName1}, function (err, data) {
                            troop11 = data[0].t1count, troop22 = data[0].t2count, troop33 = data[0].t3count;
                            t11d = data[0].t1defense, t22d = data[0].t2defense, t33d = data[0].t3defense;


                        });
                    });
                    STroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                        troop4 = data[0].s1count, troop5 = data[0].s2count, troop6 = data[0].s3count;
                        c1a = data[0].s1attack, c2a = data[0].s2attack, c3a = data[0].s3attack;
                        var conditions = {PlayerName: req.body.PlayerName},
                            update = {
                                s1count: troop4 - t4,
                                s2count: troop5 - t5,
                                s3count: troop6 - t6
                            }, options = {multi: true};
                        STroops.update(conditions, update, options, function (err, data1) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log(data1);
                            }
                        });
                        STroops.find({'PlayerName': req.body.PlayerName1}, function (err, data) {
                            troop44 = data[0].s1count, troop55 = data[0].s2count, troop66 = data[0].s3count;
                            c11d = data[0].s1defense, c22d = data[0].s2defense, c33d = data[0].s3defense;

                        });
                    });
                    WTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                        troop7 = data[0].w1count, troop8 = data[0].w2count, troop9 = data[0].w3count;
                        w1a = data[0].w1attack1, w2a = data[0].w2attack1, w3a = data[0].w3attack1;
                        var conditions = {PlayerName: req.body.PlayerName},
                            update = {
                                w1count: troop7 - t7,
                                w2count: troop8 - t8,
                                w3count: troop9 - t9
                            }, options = {multi: true};
                        WTroops.update(conditions, update, options, function (err, data1) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log(data1);
                            }
                        });
                        WTroops.find({'PlayerName': req.body.PlayerName1}, function (err, data) {
                            troop77 = data[0].w1count, troop88 = data[0].w2count, troop99 = data[0].w3count;
                            w11d = data[0].w1defense, w22d = data[0].w2defense, w33d = data[0].w3defense;

                        });
                    });

                    SecTroops.find({PlayerName: Name2}, function (err, data) {
                        t11 = data[0].t1, t22 = data[0].t2, t33 = data[0].t3, t44 = data[0].t4, t55 = data[0].t5, t66 = data[0].t6, t77 = data[0].t7,
                            t88 = data[0].t8, t99 = data[0].t9;

                    });
                    Notific.find({PlayerName: Name1}, function (err, data) {
                        var AttOut = data[0].AttacksOutgoing;

                        var cond = {PlayerName: req.body.PlayerName},
                            up1 = {
                                AttacksOutgoing: AttOut + 1
                            }, opt1 = {multi: true};

                        Notific.update(cond, up1, opt1, function (err, data1) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log(data1);
                            }
                        });
                    });
                    Notific.find({PlayerName: Name2}, function (err, data) {
                        var AttInc = data[0].AttacksIncoming;

                        var cond = {PlayerName: req.body.PlayerName1},
                            up1 = {
                                AttacksIncoming: AttInc + 1
                            }, opt1 = {multi: true};

                        Notific.update(cond, up1, opt1, function (err, data1) {
                            if (err) {
                                console.error(err);
                            }
                            else {
                                console.log(data1);
                            }
                        });
                    });
                    var time = (WTlvl * 10000) + 30000;
                    console.log(WTlvl, time);

                    setTimeout(function () {

                        var TotalAttackPower = (t1 * t1a) + ( t2 * t2a) + (t3 * t3a) + (t4 * c1a) + (t5 * c2a) + (t6 * c3a);
                        var TotalSeigePower = (troop8 * w1a) + (troop7 * w2a) + (troop9 * w3a);
                        var secDefPower = (t11 * t11d) + (t22 * t22d) + (t33 * t33d) + (t44 * c11d) + (t55 * c22d) + (t66 * c33d);
                        console.log(secDefPower);
                        var ratio;
                        //  console.log(troop11,t11d);
                        var defPower = ((troop11 * t11d) + (troop22 * t22d) + (troop33 * t33d) + (troop44 * c11d) + (troop55 * c22d) + (troop66 * c33d)
                            + (t11 * t11d) + (t22 * t22d) + (t33 * t33d) + (t44 * c11d) + (t55 * c22d) + (t66 * c33d));

                        //  console.log(defPower,TotalAttackPower);
                        // console.log(t11d,troop9*t1a);

                        if (defPower > TotalAttackPower) {
                            console.log(defPower, TotalAttackPower);
                            ratio = Math.round(100 * Math.pow((TotalAttackPower / defPower), 1.5));

                            console.log(ratio);
                            STroops.find({'PlayerName': req.body.PlayerName1}, function (err, data) {
                                var s1 = data[0].s1count, s2 = data[0].s2count, s3 = data[0].s3count;
                                var c44 = {PlayerName: req.body.PlayerName1},
                                    u44 = {
                                        s1count: s1 - (Math.round((ratio / 100) * s1)),
                                        s2count: s2 - (Math.round((ratio / 100) * s2)),
                                        s3count: s3 - (Math.round((ratio / 100) * s3))
                                    }, op44 = {multi: true};
                                STroops.update(c44, u44, op44, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            BTroops.find({'PlayerName': req.body.PlayerName1}, function (err, data) {
                                var b1 = data[0].t1count, b2 = data[0].t2count, b3 = data[0].t3count;

                                var ccc = (Math.round((ratio / 100) * b1));
                                console.log(ccc);
                                var c55 = {PlayerName: req.body.PlayerName1},
                                    u55 = {
                                        t1count: b1 - (Math.round((ratio / 100) * b1)),
                                        t2count: b2 - (Math.round((ratio / 100) * b2)),
                                        t3count: b3 - (Math.round((ratio / 100) * b3))
                                    }, op55 = {multi: true};
                                BTroops.update(c55, u55, op55, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            WTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                var w7 = data[0].w1count, w8 = data[0].w2count, w9 = data[0].w3count;
                                var c66 = {PlayerName: req.body.PlayerName1},
                                    u66 = {
                                        w1count: w7 - (Math.round((ratio / 100) * w7)),
                                        w2count: w8 - (Math.round((ratio / 100) * w8)),
                                        w3count: w9 - (Math.round((ratio / 100) * w9))
                                    }, op66 = {multi: true};
                                WTroops.update(c66, u66, op66, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });

                            Stats.update({PlayerName: req.body.PlayerName}, {AttackPoints: Math.round((ratio / 100) * TotalAttackPower)},
                                {multi: true}, function (err, dat1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(dat1);
                                    }
                                });
                            Stats.update({PlayerName: req.body.PlayerName1}, {DefensePoints: TotalAttackPower +1000}, {multi: true}, function (err, dat2) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    console.log(dat2);
                                }
                            });

                            Notific.find({PlayerName: Name1}, function (err, data) {
                                var AttOut = data[0].AttacksOutgoing;

                                var cond = {PlayerName: req.body.PlayerName},
                                    up1 = {
                                        AttacksOutgoing: AttOut - 1
                                    }, opt1 = {multi: true};

                                Notific.update(cond, up1, opt1, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            Notific.find({PlayerName: Name2}, function (err, data) {
                                var AttInc = data[0].AttacksIncoming;

                                var cond = {PlayerName: req.body.PlayerName1},
                                    up1 = {
                                        AttacksIncoming: AttInc - 1
                                    }, opt1 = {multi: true};

                                Notific.update(cond, up1, opt1, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });

                        }
                        else if (TotalAttackPower > defPower) {
                            ratio = Math.round(100 * Math.pow((defPower / TotalAttackPower), 1.5));
                            console.log(defPower, TotalAttackPower);
                            console.log(ratio);


                            var c1 = {PlayerName: req.body.PlayerName1},
                                u1 = {
                                    s1count: 0,
                                    s2count: 0,
                                    s3count: 0
                                }, options = {multi: true};
                            STroops.update(c1, u1, options, function (err, data1) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    console.log(data1);
                                }
                            });
                            var c2 = {PlayerName: req.body.PlayerName1},
                                u2 = {
                                    t1count: 0,
                                    t2count: 0,
                                    t3count: 0
                                }, op2 = {multi: true};
                            BTroops.update(c2, u2, op2, function (err, data1) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    console.log(data1);
                                }
                            });
                            var c3 = {PlayerName: req.body.PlayerName1},
                                u3 = {
                                    w1count: 0,
                                    w2count: 0,
                                    w3count: 0
                                }, op3 = {multi: true};
                            WTroops.update(c3, u3, op3, function (err, data1) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    console.log(data1);
                                }
                            });
                            STroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                var s1 = data[0].s1count, s2 = data[0].s2count, s3 = data[0].s3count;
                                var c4 = {PlayerName: req.body.PlayerName},
                                    u4 = {
                                        s1count: (s1 + Math.round(((100 - ratio) / 100) * t4)),
                                        s2count: (s2 + Math.round(((100 - ratio) / 100) * t5)),
                                        s3count: (s3 + Math.round(((100 - ratio) / 100) * t6))
                                    }, op4 = {multi: true};
                                STroops.update(c4, u4, op4, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            setTimeout(function () {


                                BTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                    var b1 = data[0].t1count, b2 = data[0].t2count, b3 = data[0].t3count;
                                    console.log(b1, b2, b3);
                                    var c5 = {PlayerName: req.body.PlayerName},
                                        u5 = {
                                            t1count: (b1 + Math.round(((100 - ratio) / 100) * t1)),
                                            t2count: (b2 + Math.round(((100 - ratio) / 100) * t2)),
                                            t3count: (b3 + Math.round(((100 - ratio) / 100) * t3))
                                        }, op5 = {multi: true};
                                    BTroops.update(c5, u5, op5, function (err, data1) {
                                        if (err) {
                                            console.error(err);
                                        }
                                        else {
                                            console.log(data1);
                                        }
                                    });
                                });
                                WTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                    var w7 = data[0].w1count, w8 = data[0].w2count, w9 = data[0].w3count;
                                    var c6 = {PlayerName: req.body.PlayerName},
                                        u6 = {
                                            w1count: w7 + (Math.round(((100 - ratio) / 100) * t7)),
                                            w2count: w8 + (Math.round(((100 - ratio) / 100) * t8)),
                                            w3count: w9 + (Math.round(((100 - ratio) / 100) * t9))
                                        }, op6 = {multi: true};
                                    WTroops.update(c6, u6, op6, function (err, data1) {
                                        if (err) {
                                            console.error(err);
                                        }
                                        else {
                                            console.log(data1);
                                        }
                                    });
                                });
                                Stats.update({PlayerName: req.body.PlayerName}, {AttackPoints: defPower +1000},
                                    {multi: true}, function (err, dat1) {
                                        if (err) {
                                            console.error(err);
                                        }
                                        else {
                                            console.log(dat1);
                                        }
                                    });
                                Stats.update({PlayerName: req.body.PlayerName1}, {DefensePoints: Math.round((ratio / 100) * defPower)}, {multi: true}, function (err, dat2) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(dat2);
                                    }
                                });

                            }, 5000);
                        }
                        Notific.find({PlayerName: Name1}, function (err, data) {
                            var AttOut = data[0].AttacksOutgoing;

                            var cond = {PlayerName: req.body.PlayerName},
                                up1 = {
                                    AttacksOutgoing: AttOut - 1
                                }, opt1 = {multi: true};

                            Notific.update(cond, up1, opt1, function (err, data1) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    console.log(data1);
                                }
                            });
                        });
                        Notific.find({PlayerName: Name2}, function (err, data) {
                            var AttInc = data[0].AttacksIncoming;

                            var cond = {PlayerName: req.body.PlayerName1},
                                up1 = {
                                    AttacksIncoming: AttInc - 1
                                }, opt1 = {multi: true};

                            Notific.update(cond, up1, opt1, function (err, data1) {
                                if (err) {
                                    console.error(err);
                                }
                                else {
                                    console.log(data1);
                                }
                            });
                        });

                    }, time);
                    res.send("attack has been sent");

                }
                else{
                    res.send("Insufficient Troops Available");
                }
                });
                    });
                });


                });

        }
        else if(data[0] == null){res.send("Invalid PlayerName Entered");}

    });

});

router.post('/Reinforcement',function (req,res) {
    var t11,t22,t33,t44,t55,t66,t77,t88,t99;
    RegNames.find({PlayerName:req.body.PlayerName1},function (err,data) {
        if(data[0] != null) {
            var troop1,troop2,troop3,troop4,troop5,troop6,troop7,troop8,troop9;
            var Name1=req.body.PlayerName,Name2=req.body.PlayerName1;
            var t1=req.body.t1,t2=req.body.t2,t3=req.body.t3,t4=req.body.t4,t5=req.body.t5,t6=req.body.t6,t7=req.body.t7,t8=req.body.t8,t9=req.body.t9;
            BTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                troop1 = data[0].t1count, troop2 = data[0].t2count, troop3 = data[0].t3count;
                STroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                    troop4 = data[0].s1count, troop5 = data[0].s2count, troop6 = data[0].s3count;
                    WTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                        troop7 = data[0].w1count, troop8 = data[0].w2count, troop9 = data[0].w3count;


                        if(troop1>=t1 & troop2>=t2 & troop3>=t3 & troop4>=t4 & troop5>=t5 & troop6>= t6 & troop7>= t7 & troop8>=t8 & troop9>=t9) {


                            BTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                troop1 = data[0].t1count, troop2 = data[0].t2count, troop3 = data[0].t3count;
                                var conditions = {PlayerName: req.body.PlayerName},
                                    update = {
                                        t1count: troop1 - t1,
                                        t2count: troop2 - t2,
                                        t3count: troop3 - t3
                                    }, options = {multi: true};
                                BTroops.update(conditions, update, options, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });

                            });
                            STroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                troop4 = data[0].s1count, troop5 = data[0].s2count, troop6 = data[0].s3count;
                                var conditions = {PlayerName: req.body.PlayerName},
                                    update = {
                                        s1count: troop4 - t4,
                                        s2count: troop5 - t5,
                                        s3count: troop6 - t6
                                    }, options = {multi: true};
                                STroops.update(conditions, update, options, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            WTroops.find({'PlayerName': req.body.PlayerName}, function (err, data) {
                                troop7 = data[0].w1count, troop8 = data[0].w2count, troop9 = data[0].w3count;
                                var conditions = {PlayerName: req.body.PlayerName},
                                    update = {
                                        w1count: troop7 - t7,
                                        w2count: troop8 - t8,
                                        w3count: troop9 - t9
                                    }, options = {multi: true};
                                WTroops.update(conditions, update, options, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            Notific.find({PlayerName: req.body.PlayerName}, function (err, data) {
                                var ReinfOut = data[0].ReinfOutgoing;

                                var cond = {PlayerName: req.body.PlayerName},
                                    up1 = {
                                        ReinfOutgoing: ReinfOut + 1
                                    }, opt1 = {multi: true};

                                Notific.update(cond, up1, opt1, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });
                            Notific.find({PlayerName: req.body.PlayerName1}, function (err, data) {
                                var ReinfInc = data[0].ReinfIncoming;

                                var cond = {PlayerName: req.body.PlayerName1},
                                    up1 = {
                                        ReinfIncoming: ReinfInc + 1
                                    }, opt1 = {multi: true};

                                Notific.update(cond, up1, opt1, function (err, data1) {
                                    if (err) {
                                        console.error(err);
                                    }
                                    else {
                                        console.log(data1);
                                    }
                                });
                            });

                            setTimeout(function () {
                                var send = new Reinf({
                                    SenderPlayerName: Name1,
                                    ReceiverPlayerName: Name2,
                                    t1: t1,
                                    t2: t2,
                                    t3: t3,
                                    t4: t4,
                                    t5: t5,
                                    t6: t6,
                                    t7: t7,
                                    t8: t8,
                                    t9: t9

                                });
                                Reinf.find({SenderPlayerName: Name1, ReceiverPlayerName: Name2}, function (err, data) {
                                    if (data[0] == null) {
                                        send.save(function (error) {
                                            console.log("your data is saved");
                                            if (error) {
                                                console.error(error);
                                            }
                                        });
                                    }
                                    else if (data[0] != null) {
                                        var t11 = data[0].t1, t22 = data[0].t2, t33 = data[0].t3, t44 = data[0].t4,
                                            t55 = data[0].t5, t66 = data[0].t6, t77 = data[0].t7,
                                            t88 = data[0].t8, t99 = data[0].t9;
                                        var cond = {SenderPlayerName: Name1, ReceiverPlayerName: Name2}, update = {
                                            t1: t11 + t1,
                                            t2: t22 + t2,
                                            t3: t33 + t3,
                                            t4: t44 + t4,
                                            t5: t55 + t5,
                                            t6: t66 + t6,
                                            t7: t77 + t7,
                                            t8: t88 + t8,
                                            t9: t99 + t9

                                        }, options = {multi: true};
                                        Reinf.update(cond, update, options, function (err1, data1) {
                                            if (err1) {
                                                console.error(err1);
                                            }
                                            else {
                                                console.log(data1);
                                            }
                                        });
                                    }
                                });
                                SecTroops.find({PlayerName: Name2}, function (err, data) {
                                    t11 = data[0].t1, t22 = data[0].t2, t33 = data[0].t3, t44 = data[0].t4, t55 = data[0].t5, t66 = data[0].t6, t77 = data[0].t7,
                                        t88 = data[0].t8, t99 = data[0].t9;
                                    var cond = {PlayerName: Name2}, update = {
                                        t1: t11 + t1,
                                        t2: t22 + t2,
                                        t3: t33 + t3,
                                        t4: t44 + t4,
                                        t5: t55 + t5,
                                        t6: t66 + t6,
                                        t7: t77 + t7,
                                        t8: t88 + t8,
                                        t9: t99 + t9

                                    }, options = {multi: true};
                                    SecTroops.update(cond, update, options, function (err1, data1) {
                                        if (err1) {
                                            console.error(err1);
                                        }
                                        else {
                                            console.log(data1);
                                        }
                                    });

                                    Notific.find({PlayerName: Name1}, function (err, data) {
                                        var ReinfOut = data[0].ReinfOutgoing;

                                        var cond = {PlayerName: req.body.PlayerName},
                                            up1 = {
                                                ReinfOutgoing: ReinfOut - 1
                                            }, opt1 = {multi: true};

                                        Notific.update(cond, up1, opt1, function (err, data1) {
                                            if (err) {
                                                console.error(err);
                                            }
                                            else {
                                                console.log(data1);
                                            }
                                        });
                                    });
                                    Notific.find({PlayerName: Name2}, function (err, data) {
                                        var ReinfInc = data[0].ReinfIncoming;

                                        var cond = {PlayerName: req.body.PlayerName1},
                                            up1 = {
                                                ReinfIncoming: ReinfInc - 1
                                            }, opt1 = {multi: true};

                                        Notific.update(cond, up1, opt1, function (err, data1) {
                                            if (err) {
                                                console.error(err);
                                            }
                                            else {
                                                console.log(data1);
                                            }
                                        });
                                    });


                                })
                            }, 100000);
                            res.send("Reinforcement has been sent");

                        }
                        else{
                            res.send("Insuifficent Troops Available");
                        }
                        });
                        });
                        });
        }
        else if(data[0] == null){res.send("Invalid PlayerName Entered");}

    });

});

module.exports= router;

router.post('/ReinfRetrieve',function (req,res) {
    var Name =req.body.PlayerName,Name1=req.body.PlayerName1;
    Reinf.find({SenderPlayerName:Name,ReceiverPlayerName:Name1},function (err,data) {
        var t11=data[0].t1,t22=data[0].t2,t33=data[0].t3,t44=data[0].t4,t55=data[0].t5,t66=data[0].t6,t77=data[0].t7,
            t88=data[0].t8,t99=data[0].t9;
        SecTroops.find({PlayerName: Name1},function (err1,data1) {
            var t1=data1[0].t1,t2=data1[0].t2,t3=data1[0].t3,t4=data1[0].t4,t5=data1[0].t5,t6=data1[0].t6,t7=data1[0].t7,
                t8=data1[0].t8,t9=data1[0].t9;

            var cond= {PlayerName: Name1},
                update={
                    t1:t1-t11,
                    t2:t2-t22,
                    t3:t3-t33,
                    t4:t4-t44,
                    t5:t5-t55,
                    t6:t6-t66,
                    t7:t7-t77,
                    t8:t8-t88,
                    t9:t9-t99
                },options = {multi: true};
            SecTroops.update(cond,update,options,function (err2, data2) {
                if (err1) {console.error(err1);}
                else {console.log(data1);}
            });
        });
        var cond1= {SenderPlayerName: Name,ReceiverPlayerName:Name1},
            update1={
                t1:0,
                t2:0,
                t3:0,
                t4:0,
                t5:0,
                t6:0,
                t7:0,
                t8:0,
                t9:0
            },options1 = {multi: true};


        Reinf.update(cond1,update1,options1,function (err2, data2) {
            if (err2) {console.error(err2);}
            else {console.log(data2);}
        });

        Notific.find({PlayerName:req.body.PlayerName},function (err,data) {
            var IncTroops=data[0].IncomingTroops;

            var cond= {PlayerName:req.body.PlayerName},
                up1={ReinfIncoming: IncTroops+1
                },opt1 = {multi: true};

            Notific.update(cond, up1, opt1, function (err, data1) {
                if (err) {console.error(err);}
                else {console.log(data1);}
            });
        });

        setTimeout(function () {
            BTroops.find({'PlayerName':req.body.PlayerName},function (err,data) {
                var  troop1=data[0].t1count,troop2=data[0].t2count,troop3=data[0].t3count;
                var conditions = {PlayerName: req.body.PlayerName},
                    update ={
                        t1count: troop1 + t11,
                        t2count: troop2 + t22,
                        t3count: troop3 + t33
                    },options = {multi: true};
                BTroops.update(conditions,update,options,function (err,data1) {
                    if (err) {console.error(err);}
                    else {console.log(data1);}
                });

            });
            STroops.find({'PlayerName':req.body.PlayerName},function (err,data) {
                var   troop4=data[0].s1count,troop5=data[0].s2count,troop6=data[0].s3count;
                var conditions = {PlayerName: req.body.PlayerName},
                    update ={
                        s1count: troop4 + t44,
                        s2count: troop5 + t55,
                        s3count: troop6 + t66
                    },options = {multi: true};
                STroops.update(conditions,update,options,function (err,data1) {
                    if (err) {console.error(err);}
                    else {console.log(data1);}
                });
            });
            WTroops.find({'PlayerName':req.body.PlayerName},function (err,data) {
                var   troop7=data[0].w1count,troop8=data[0].w2count,troop9=data[0].w3count;
                var conditions = {PlayerName: req.body.PlayerName},
                    update ={
                        w1count: troop7 + t77,
                        w2count: troop8 + t88,
                        w3count: troop9 + t99
                    },options = {multi: true};
                WTroops.update(conditions,update,options,function (err,data1) {
                    if (err) {console.error(err);}
                    else {console.log(data1);}
                });
            });
            Notific.find({PlayerName:req.body.PlayerName},function (err,data) {
                var IncTroops=data[0].IncomingTroops;

                var cond= {PlayerName:req.body.PlayerName},
                    up1={ReinfIncoming: IncTroops-1
                    },opt1 = {multi: true};

                Notific.update(cond, up1, opt1, function (err, data1) {
                    if (err) {console.error(err);}
                    else {console.log(data1);}
                });
            });

        },100000);
    });
    res.send("Troops are on the way back to city");

});