/**
 * Created by Administrator on 2015/12/6.
 */

$(function () {
    $quashtext = $('.quashtext');         //�Ҳ༼������Ӧ����Ԫ��
    $wextext = $('.wextext');
    $exorttext = $('.exorttext');
    $quashkey = $('#quashkeySet');        //����ȼ����ö�Ӧ����Ԫ��
    $wexkey = $('#wexkeySet');
    $exortkey = $('#exortkeySet');
    $invokekey = $('#invokekeySet');
    $skill1key = $('#skill1keySet');
    $skill2key = $('#skill2keySet');
    $panelQuashkey = $('.quashkey');        //��Ϸ����ݼ���ʾԪ��
    $panelWexkey = $('.wexkey');
    $panelExortkey = $('.exortkey');
    $panelSkill1key = $('.skill1key');
    $panelSkill2key = $('.skill2key');
    $panelInvokekey = $('.invokekey');
    $LegacyHotkeys = $('.LegacyHotkeys');        //��ഫͳ��λ��ӦԪ��
    $NormalHotkeys = $('.NormalHotkeys');
    $quash = $('#quash');                     //��Ϸ����Ӧ����ͼ��Ԫ��
    $wex = $('#wex');
    $exort = $('#exort');
    $skill1 = $('#skill1');
    $skill2 = $('#skill2');
    $invoke = $('#invoke');

    var hotkeyCode = {      //�ȼ���
        "quash": 81,
        "wex": 87,
        "exort": 69,
        "invoke": 82,
        "skill1": 68,
        "skill2": 70,
        "jslq": 89,
        "ylmb": 86,
        "hbzq": 71,
        "dcmc": 67,
        "qxjf": 88,
        "ldxj": 90,
        "yycj": 84,
        "rljl": 70,
        "hdys": 68,
        "czsb": 66
    };


    document.addEventListener('keydown', function (e) {    //ȡ�������Ĭ���ȼ�
        if (!(e.which == 123))
            e.preventDefault();
    }, false);


    $('#skillKey tr').click(function () {                       //����ȼ��Ľ�
        var $this = $(this);
        var keyBindOpen = $('#keyBindOpen')[0];
        keyBindOpen.volume = 0.6;
        if (blinkFlag) {
            if (!($cell.parent('tr').attr('class') == $this.attr('class'))) {//����˸�Ҳ���ͬһԪ��
                clearInterval(blinkSet);                      //֮ǰԪ��ֹͣ��˸��ȡ�����̼���
                blinkFlag = 0;
                $cell.stop(true)
                    .css('opacity', '1');
                $(document).off('keyup');

                $cell = $this.find('td:first-child');       //��ǰԪ�ؿ�ʼ��˸���󶨼��̼���
                keyBindOpen.pause();
                keyBindOpen.currentTime = 0;
                keyBindOpen.play();
                skillKeyActivate();

            }
            else {                              //����˸��ΪͬһԪ��
                clearInterval(blinkSet);                  //��ǰԪ��ֹͣ��˸��ȡ�����̼���
                blinkFlag = 0;
                $cell.stop(true)
                    .css('opacity', '1');
                $(document).off('keyup');
            }
        }
        else { //������˸
            keyBindOpen.pause();
            keyBindOpen.currentTime = 0;
            keyBindOpen.play();
            $cell = $this.find('td:first-child');   //��ǰԪ�ؿ�ʼ��˸���󶨼��̼���
            skillKeyActivate();
        }
    });

    $('#legacyCheckbox').click(function () {         //��ͳ��λ�л�
        if (!this.checked) {
            $LegacyHotkeys.hide();
            $NormalHotkeys.show();
            $panelSkill1key.text($skill1key.text());
            $panelSkill2key.text($skill2key.text());
        }
        else {
            $LegacyHotkeys.show();
            $NormalHotkeys.hide();
            $panelSkill1key.text('');
            $panelSkill2key.text('');
        }
    });
    $('#musicCheckbox').click(function () {
        $('.music').each(function () {
            this.muted = !this.muted
        });
    });
    $('#soundCheckbox').click(function () {
        $('.sound').each(function () {
            this.muted = !this.muted
        })
    });


    //ģʽ˵��
    $('#jsms').hover(function () {
        var $arrow = $('#arrow');
        $arrow.css('top', '48px');
        $('#intro h2').text('����ģʽ');
        $('#intro p').text('ÿ���������һ�����ܣ����ֻ���ٻ��ü��ܣ�����ʩ�ţ��ܹ�20�����ܡ�������ս��ļ������ٰɣ�')
    });
    $('#szms').hover(function () {
        var $arrow = $('#arrow');
        $arrow.css('top', '210px');
        $('#intro h2').text('ʵսģʽ');
        $('#intro p').text('ÿ���������һ�鼼�ܣ��ܹ�15�飬ÿ�鼼�����������࣬�����Ҫ��˳�����Combo�����Ϊ��������������ս��ķ�Ӧ�����ɣ�ע��ÿ��������Ҫʩ�Ų�����ɴ˼��ܡ�')
    });


    $('#reset').click(function () {       //�ָ�Ĭ���ȼ�
        hotkeyCode = {
            "quash": 81,
            "wex": 87,
            "exort": 69,
            "invoke": 82,
            "skill1": 68,
            "skill2": 70,
            "jslq": 89,
            "ylmb": 86,
            "hbzq": 71,
            "dcmc": 67,
            "qxjf": 88,
            "ldxj": 90,
            "yycj": 84,
            "rljl": 70,
            "hdys": 68,
            "czsb": 66
        };
        $quashkey.text('Q');             //�ָ��Ҳ�˵���ȼ���ʾ
        $wexkey.text('W');
        $exortkey.text('E');
        $quashtext.text('Q');
        $wextext.text('W');
        $exorttext.text('E');
        $('#invokekeySet').text('R');          //�ָ�����ȼ�������ʾ
        $('#skill1keySet').text('D');
        $('#skill2keySet').text('F');
        $('#jslqkeySet').text('Y');
        $('#YLMBkeySet').text('v');
        $('#hbzqkeySet').text('G');
        $('#dcmckeySet').text('C');
        $('#qxjfkeySet').text('X');
        $('#ldxjkeySet').text('Z');
        $('#yycjkeySet').text('T');
        $('#rljlkeySet').text('F');
        $('#hdyskeySet').text('D');
        $('#czsbkeySet').text('B');
        $panelQuashkey.text('Q');         //�ָ���Ϸ���Ĭ���ȼ���ʾ
        $panelWexkey.text('W');
        $panelExortkey.text('E');
        $panelSkill1key.text('D');
        $panelSkill2key.text('F');
        $panelInvokekey.text('R');
        $('#legacyCheckbox').prop('checked', false);
        $LegacyHotkeys.hide();
        $NormalHotkeys.show();

    });            //�ָ�Ĭ�ϼ�λ

var blinkFlag;
    function skillKeyActivate() {                    //�Ľ���˸����

        $cell.fadeTo(200, 0)
            .fadeTo(200, 1);
        blinkSet = setInterval(function () {
            $cell.fadeTo(200, 0)
                .fadeTo(200, 1);
        }, 410);
        blinkFlag = 1;

        $(document).one('keyup', function (e) {
            var realKey = '';
            switch (e.which) {
                case 96:
                    realKey = 'Num 0';
                    break;
                case 97:
                    realKey = 'Num 1';
                    break;
                case 98:
                    realKey = 'Num 2';
                    break;
                case 99:
                    realKey = 'Num 3';
                    break;
                case 100:
                    realKey = 'Num 4';
                    break;
                case 101:
                    realKey = 'Num 5';
                    break;
                case 102:
                    realKey = 'Num 6';
                    break;
                case 103:
                    realKey = 'Num 7';
                    break;
                case 104:
                    realKey = 'Num 8';
                    break;
                case 105:
                    realKey = 'Num 9';
                    break;

                case 112:
                    realKey = 'F1';
                    break;
                case 113:
                    realKey = 'F2';
                    break;
                case 114:
                    realKey = 'F3';
                    break;
                case 115:
                    realKey = 'F4';
                    break;
                case 116:
                    realKey = 'F5';
                    break;
                case 117:
                    realKey = 'F6';
                    break;
                case 118:
                    realKey = 'F7';
                    break;
                case 119:
                    realKey = 'F8';
                    break;
                case 120:
                    realKey = 'F9';
                    break;
                case 121:
                    realKey = 'F10';
                    break;
                case 122:
                    realKey = 'F11';
                    break;

                case 8:
                    realKey = 'BKSP';
                    break;
                case 9:
                    realKey = 'TAB';
                    break;
                case 16:
                    realKey = 'SHIFT';
                    break;
                case 17:
                    realKey = 'CTRL';
                    break;
                case 18:
                    realKey = 'ALT';
                    break;
                case 20:
                    realKey = 'CPLC';
                    break;
                case 32:
                    realKey = 'SPACE';
                    break;
                case 192:
                    realKey = '`';
                    break;
                case 27:
                    clearInterval(blinkSet);
                    blinkFlag = 0;
                    $cell.stop(true);
                    $cell.css('opacity', 1);
                    return;
                default:
                    realKey = String.fromCharCode(e.which);
            }
            var keyBindSet = $('#keyBindSet')[0];
            keyBindSet.volume = 0.6;
            keyBindSet.pause();
            keyBindSet.currentTime = 0;
            keyBindSet.play();

            clearInterval(blinkSet);
            blinkFlag = 0;
            var cellTextBefore = $cell.text();
            $cell.stop(true)
                .css('opacity', 1)
                .text(realKey);
            var idstr = $cell.attr('id');
            var key = idstr.substring(0, idstr.length - 6);
            var keyCodeBefore = hotkeyCode[key];
            hotkeyCode[key] = e.which;                      //�ڲ��޸Ķ�Ӧ�ȵ�codeֵ
            var $tr = $cell.parent('tr');
            $tr.siblings().find('.controlboxHotkey').each(function () {     //���ȼ���ͻ�򽻻��ı���ʾ����Ӧcodeֵ
                var $this = $(this);
                if ($this.text() == $cell.text()) {
                    $this.text(cellTextBefore);
                    var idstr = $this.attr('id');
                    var key = idstr.substring(0, idstr.length - 6);
                    hotkeyCode[key] = keyCodeBefore;

                }
            });
            $quashtext.text($quashkey.text());            //�޸��Ҳ༼���б���ʾ
            $wextext.text($wexkey.text());
            $exorttext.text($exortkey.text());

            $panelQuashkey.text($quashkey.text());        //�޸���Ϸ����ݼ���ʾ
            $panelWexkey.text($wexkey.text());
            $panelExortkey.text($exortkey.text());
            $panelSkill1key.text($skill1key.text());
            $panelSkill2key.text($skill2key.text());
            $panelInvokekey.text($invokekey.text());

        });
    }


    var StopWatch =
    {
        stopWatchTimeSet:null,
        startTime: 0,
        stopTime: 0,
        elapsed: 0,
        ss: 0,
        s: 0,
        started: false,
        interval: 10,
        start: function () {
            var that=this;
            if ((this.ss % 100) == 0 && (this.ss > 0)) {
                this.s += 1;
                this.ss = 0;
            }
            var s = this.checkTime(this.s);
            var ss = this.checkTime(this.ss);
            this.ss += 1;
            $('.stopWatch').text(s + ':' + ss);
            this.stopWatchTimeSet = setTimeout(function(){that.start()}, 10);
        },
        pause: function () {
            this.started = false;
            clearTimeout(this.stopWatchTimeSet);
        },
        stop: function () {
            this.started = false;
            clearTimeout(this.stopWatchTimeSet);
            this.s = 0;
            this.ss = 0;
            $('.stopWatch').text('00:00');
        },
        checkTime: function (i) {
            if (i < 10) {
                i = '0' + i;
            }
            return i;
        }
    };

    var currentGame;

    function Game(gameType) {
        this.gameType = gameType;
        this.gameFlag = false;
        this.number = 0;
    }

    Game.prototype = {
        renderUI: function () {
            $('#menu').hide();                     //����Ŀ¼
            $('#gameInterface').show();            //��ʾ��Ϸ����
            StopWatch.stop();                      //�������
            $('.stopWatch').removeClass('flash');   //��������Ч��
            var $box = $('#' + currentGame.gameType + '_box'); //������ʾ����
            $box.show()                            //����������ʾ
                .siblings().hide().end()          //����ģʽ������������
                .find('div').attr('class', '')
                .find('div').attr('class', 'picture').end()  //��ռ�����ʾ������ʽ������ͼ����ʽ������������ʽ
                .find('span').attr('class', 'name').text('');
            $('.buttonStart').show();             //��ʾ��ʼ��ť
            $('#tipsWord,#tipsNum').text('').hide();//������ʾ
            return this;
        },
        bindUI: function () {
            $('#gameInterface .buttonStart').click(function () {        //��ʼ��Ϸ
                if (!StopWatch.started) {
                    currentGame.start();
                }

            });
            return this;
        },
        syncUI: function () {
            return this;
        },

        ready: function () {
            this.renderUI().bindUI().syncUI();
        },
        start: function () {
            //alert(StopWatch);
            currentGame.gameFlag = true;
            var $readyCountNum = $('.readyCountNum');

            function readyCountStart() {
                var nextAnimation = function () {
                    $readyCountNum.dequeue('countDown');
                };
                $readyCountNum.show()
                    .text('3')
                    .css({'font-size': '500px', 'opacity': '0.2', 'top': '0'});

                var count = [
                    function () {
                        var sound = $('#countSound')[0];
                        sound.pause();
                        sound.currentTime = 0;
                        sound.play();
                        $readyCountNum.animate({'font-size': '100px', 'opacity': 1, 'top': '190px'}, 1000, function () {
                            $readyCountNum.text('2')
                                .css({'font-size': '500px', 'opacity': 0.2, 'top': '0'});
                            nextAnimation();
                        })
                    },
                    function () {
                        var sound = $('#countSound')[0];
                        sound.pause();
                        sound.currentTime = 0;
                        sound.play();
                        $readyCountNum.animate({'font-size': '100px', 'opacity': 1, 'top': '190px'}, 1000, function () {
                            $readyCountNum.text('1')
                                .css({'font-size': '500px', 'opacity': 0.2, 'top': '0'});
                            nextAnimation();
                        })
                    },
                    function () {
                        var sound = $('#countSound')[0];
                        sound.pause();
                        sound.currentTime = 0;
                        sound.play();
                        $readyCountNum.animate({'font-size': '100px', 'opacity': 1, 'top': '190px'}, 1000, function () {
                            var gameMusic = $('#gameMusic')[0];
                            $readyCountNum.hide();
                            gameMusic.pause();
                            gameMusic.currentTime = 0;
                            gameMusic.play();
                            nextAnimation();
                        })
                    }
                ];
                $readyCountNum.queue('countDown', count);       //�����������������countDown
                nextAnimation();
            }

            StopWatch.started = true;
            readyCountStart();//׼������
            $('.buttonStart').hide();
            $('#tipsNum,#tipsWord').show();
            switch (this.gameType) {
                case 'jsms':
                    $('#tipsNum').text('20');
                    $('#tipsWord').text('ʣ�༼��:');
                    $readyCountNum.queue('countDown', function () {
                        StopWatch.start();//���ʼ��ʱ
                        randomSpellShow(1, $('#jsms_spellShow>div'), $('#jsms_spellShow>span'), $('#jsms_spellShow'));//�������������ʾ
                        new Panel().activate();
                    });
                    break;
                case'szms':
                    $('#tipsNum').text('15');
                    $('#tipsWord').text('ʣ��Combo:');
                    $readyCountNum.queue('countDown', function () {
                        StopWatch.start();//���ʼ��ʱ
                        randomSpellShow(1, $('#szms_spellShow1>div'), $('#szms_spellShow1>span'), $('#szms_spellShow1'));//�������������ʾ
                        new Panel().activate();
                    });
            }
        },
        cancel: function () {
            this.ready();
            new Panel().inactivate();
            $('#menu').show();
            $('#gameInterface').hide();
            if (currentGame.gameFlag == false) {
                var victorySound = $('#victory')[0];
                var menuMusic = $('#menuMusic')[0];
                menuMusic.pause();
                menuMusic.currentTime = 0;
                victorySound.pause();
                victorySound.currentTime = 0;
            }
            currentGame.gameFlag = false;
        },
        restart: function () {
            this.ready();
        },
        end: function () {
            var $stopwatchShow=$('.stopWatch')
            currentGame.gameFlag = false;
            StopWatch.pause();
            $('#tipsNum').text('').hide();       //��ʾ��Ϸ���
            $('#tipsWord').text('��Ϸ���!');
            $stopwatchShow.addClass('mix');
            setTimeout(function () {
                $stopwatchShow.removeClass('mix');
                $stopwatchShow.addClass('flash');
            }, 1000);
            var $box = $('#' + currentGame.gameType + '_box');
            $box.find('div').attr('class', '')
                .find('div').attr('class', 'picture').end()  //��ռ�����ʾ������ʽ������ͼ����ʽ������������ʽ
                .find('span').attr('class', 'name').text('');
            new Panel().inactivate();
            var soundIndex = Math.floor(Math.random() * 2);
            var victorySound = $('#victory')[0];
            var gameMusic = $('#gameMusic')[0];
            var victorySpeak = $('.victorySpeak')[soundIndex];
            var skillSound = $('audio.skill');    //ֹͣ������Ч
            for(var i=0;i<skillSound.length;i++){
                skillSound[i].pause();
                skillSound[i].currentTime=0;
            }
            gameMusic.pause();
            gameMusic.currentTime = 0;
            victorySound.volume = 0.5;
            victorySound.play();
            setTimeout(function () {
                victorySpeak.play()
            }, 4000);
        }
    };


    function Panel() {
    }

    var $orb1 = $('#orb1');                     //��Ԫ��
    var $orb2 = $('#orb2');
    var $orb3 = $('#orb3');
    var skillkeyCode = {                     //���ܱ�key������0��ͷ��������sǰ׺
        s300: "jslq",
        s210: "ylmb",
        s201: "hbzq",
        s030: "dcmc",
        s120: "qxjf",
        s021: "ldxj",
        s003: "yycj",
        s102: "rljl",
        s012: "hdys",
        s111: "czsb"
    };
    var randomClassList = [];
    for (var key in skillkeyCode) {               //�����ܱ�key��������
        randomClassList.push(skillkeyCode[key]);
    }

    var randomClassTemp = [];
    //var randomClassTempClone = [];
    function randomSpellShow(skillNum, pictureBox, NameBox, spellBox) {
        var randomClass;
        randomClassTemp.length = skillNum;
        do {
            randomClassList.sort(function () {
                return Math.random() - 0.5
            });
            randomClass = randomClassList.slice(0, skillNum);
        }
        while (randomClassTemp.toString() == randomClass.toString());
        randomClassTemp = randomClass;
        //randomClassTempClone=randomClassTemp.slice(0);
        pictureBox.each(function (index) {
            $(this).attr('class', 'picture').addClass(randomClass[index]);
        });
        NameBox.each(function (index) {
            $(this).attr('class', 'name').addClass(randomClass[index])
                .text(skillNameCode[randomClass[index]]);
        });
        if(spellBox){
            switch (currentGame.gameType){
            case 'jsms':
                spellBox.each(function (index) {
                $(this).attr('class', '').addClass(randomClass[index]);
            });
                break;
            case 'szms':
                spellBox.show().siblings().hide();
                break;
            }
        }
    }
    Panel.prototype.activate = function () {
        var randomClassTempClone=new Array();
        randomClassTempClone=randomClassTemp.slice(0);
        var orbArray = [$orb1, $orb2, $orb3];
        var $tipsNum = $('#tipsNum');
        var invokeCode;
        var skillName;
        var invokeSound = $('#invokeSound')[0];
        var lvlupSound=$('#lvlup')[0];
        var $panel=$('.panel');
        $panel.on('click.game',"#quash,#wex,#exort",function () {
            var $this = $(this);
            $orb3.attr('class', $orb2.attr('class'));
            $orb2.attr('class', $orb1.attr('class'));
            $orb1.attr('class', $this.attr('id'));
        });

        $panel.on('click.game','#invoke',function () {
            var quashNum = 0;
            var wexNum = 0;
            var exortNum = 0;
            for (var i = 0; i <= 2; i++) {
                switch (orbArray[i].attr('class')) {
                    case 'quash':
                        quashNum += 1;
                        break;
                    case 'wex':
                        wexNum += 1;
                        break;
                    case 'exort':
                        exortNum += 1;
                        break;
                }
            }
            invokeCode = 's' + quashNum + wexNum + exortNum;
            skillName = skillkeyCode[invokeCode];

            if (!(skillName == $skill1.attr('class'))) {           //�ٻ��ļ������ϴβ���ͬ
                $skill2.attr('class', $skill1.attr('class'));
                $skill1.attr('class', skillName);
                if ($('#legacyCheckbox')[0].checked) {
                    $panelSkill2key.text(($panelSkill1key.text()));
                    $panelSkill1key.text($('#' + skillName + 'keySet').text());
                }
            }

            invokeSound.pause();
            invokeSound.currentTime = 0;
            invokeSound.volume = 0.8;
            invokeSound.play();
        });
        var $szms_Picture = $('#szms_spellShow1>div'),
            $szms_Name = $('#szms_spellShow1>span'),
            $szms_Spellbox = $('#szms_spellShow1');
        var $jsms_Picture = $('#jsms_spellShow>div'),
            $jsms_Name = $('#jsms_spellShow>span'),
            $jsms_Spellbox = $('#jsms_spellShow');
        switch (currentGame.gameType) {
            case 'jsms':
                $panel.on('click.game','#invoke',function () {
                    if ($jsms_Picture.hasClass(skillName)) {           //�ٻ��ļ��ܷ���Ҫ��
                        if (currentGame.number == 19) {
                            currentGame.end();
                        }
                        else {
                            currentGame.number += 1;
                            $tipsNum.text(20 - currentGame.number);
                            randomSpellShow(1, $jsms_Picture, $jsms_Name, $jsms_Spellbox);
                            var skillSound = $('audio.' + skillName)[0];    //���ż�����Ч
                            if (skillSound) {
                                skillSound.pause();
                                skillSound.currentTime=0;
                                skillSound.volume = 0.4;
                                skillSound.play();
                            }
                        }
                    }
                });
                break;
            case'szms':
                $(document).on('keydown.game', function (e) {
                    if ($('#legacyCheckbox')[0].checked) {
                        switch (e.which) {
                            case hotkeyCode[$skill1.attr('class')]:
                                $skill1.click();
                                break;
                            case hotkeyCode[$skill2.attr('class')]:
                                $skill2.click();
                                break;
                        }
                    }
                    else{
                        switch (e.which){
                            case hotkeyCode.skill1:
                                $skill1.click();
                                break;
                            case hotkeyCode.skill2:
                                $skill2.click();
                                break;
                        }
                    }
                });
                $panel.on('click.game','#skill1,#skill2',function () {
                    if (randomClassTempClone[0] == $(this).attr('class')) {
                        switch (currentGame.number) {
                            case 0:
                            case 1:
                            case 2:
                                randomSpellShow(1, $szms_Picture, $szms_Name,null);
                                randomClassTempClone=randomClassTemp.slice(0);
                                currentGame.number += 1;
                                $tipsNum.text(15 - currentGame.number);
                                break;
                            case 3:
                                $szms_Picture = $('#szms_spellShow2>div');
                                $szms_Name = $('#szms_spellShow2>span');
                                $szms_Spellbox = $('#szms_spellShow2');
                                randomSpellShow(2, $szms_Picture, $szms_Name, $szms_Spellbox);
                                randomClassTempClone=randomClassTemp.slice(0);
                                currentGame.number += 1;
                                $tipsNum.text(15 - currentGame.number);
                                lvlupSound.pause();
                                lvlupSound.currentTime=0;
                                lvlupSound.play();
                                break;
                            case 4:
                            case 5:
                            case 6:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity',1);
                                    $szms_Name.css('opacity',1);
                                    randomSpellShow(2, $szms_Picture, $szms_Name, null);
                                    randomClassTempClone=randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                }
                                else {
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 7:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity', 1);
                                    $szms_Name.css('opacity', 1);
                                    $szms_Picture = $('#szms_spellShow3>div');
                                    $szms_Name = $('#szms_spellShow3>span');
                                    $szms_Spellbox = $('#szms_spellShow3');
                                    randomSpellShow(3, $szms_Picture, $szms_Name, $szms_Spellbox);
                                    randomClassTempClone = randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                    lvlupSound.pause();
                                    lvlupSound.currentTime=0;
                                    lvlupSound.play();
                                }
                                else{
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 8:
                            case 9:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity',1);
                                    $szms_Name.css('opacity',1);
                                    randomSpellShow(3, $szms_Picture, $szms_Name, null);
                                    randomClassTempClone=randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                }
                                else {
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 10:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity', 1);
                                    $szms_Name.css('opacity', 1);
                                    $szms_Picture = $('#szms_spellShow4>div');
                                    $szms_Name = $('#szms_spellShow4>span');
                                    $szms_Spellbox = $('#szms_spellShow4');
                                    randomSpellShow(4, $szms_Picture, $szms_Name, $szms_Spellbox);
                                    randomClassTempClone = randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                    lvlupSound.pause();
                                    lvlupSound.currentTime=0;
                                    lvlupSound.play();
                                }
                                else {
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 11:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity',1);
                                    $szms_Name.css('opacity',1);
                                    randomSpellShow(4, $szms_Picture, $szms_Name, null);
                                    randomClassTempClone=randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                }
                                else {
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 12:
                                if(randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity', 1);
                                    $szms_Name.css('opacity', 1);
                                    $szms_Picture = $('#szms_spellShow6>div');
                                    $szms_Name = $('#szms_spellShow6>span');
                                    $szms_Spellbox = $('#szms_spellShow6');
                                    randomSpellShow(6, $szms_Picture, $szms_Name,  $szms_Spellbox);
                                    randomClassTempClone = randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                    lvlupSound.pause();
                                    lvlupSound.currentTime=0;
                                    lvlupSound.play();
                                }
                                else{
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 13:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity',1);
                                    $szms_Name.css('opacity',1);
                                    $szms_Picture = $('#szms_spellShow10>div');
                                    $szms_Name = $('#szms_spellShow10>span');
                                    $szms_Spellbox = $('#szms_spellShow10');
                                    randomSpellShow(10, $szms_Picture, $szms_Name,  $szms_Spellbox);
                                    randomClassTempClone=randomClassTemp.slice(0);
                                    currentGame.number += 1;
                                    $tipsNum.text(15 - currentGame.number);
                                    lvlupSound.pause();
                                    lvlupSound.currentTime=0;
                                    lvlupSound.play();
                                }
                                else {
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                            case 14:
                                if (randomClassTempClone.length == 1) {
                                    $szms_Picture.css('opacity',1);
                                    $szms_Name.css('opacity',1);
                                    currentGame.end();
                                }
                                else {
                                    $szms_Spellbox.find('[class*='+randomClassTempClone[0]+']').fadeTo(300, 0);
                                    randomClassTempClone.shift();
                                }
                                break;
                                }
                        var skillSound = $('audio.' + $(this).attr('class'))[0];    //���ż�����Ч
                        if (skillSound) {
                            skillSound.pause();
                            skillSound.currentTime=0;
                            skillSound.volume = 0.4;
                            skillSound.play();
                        }
                    }


                    //switch (currentGame.number){


                });
        }
        $(document).on('keydown.game', function (e) {
            switch (e.which) {
                case hotkeyCode.quash:
                    $quash.click();
                    break;
                case hotkeyCode.wex:
                    $wex.click();
                    break;
                case hotkeyCode.exort:
                    $exort.click();
                    break;
                case hotkeyCode.invoke:
                    $invoke.click();
                    break;
            }
        });
    };
    Panel.prototype.inactivate = function () {
        $orb3.attr('class', '');
        $orb2.attr('class', '');
        $orb1.attr('class', '');
        $skill2.attr('class', '');
        $skill1.attr('class', '');
        if ($('#legacyCheckbox')[0].checked) {
            $panelSkill1key.text('');
            $panelSkill2key.text('');
        }
        $('.panel').off('.game');
        $(document).off('.game');
    };


    $('#modelList').on('mouseenter', 'li', function () {
        var sound = $('#modelhoverSound')[0];
        sound.pause();
        sound.currentTime = 0.0;
        sound.volume = 0.6;
        sound.play();
    }).on('click', 'li', function (e) {
        var sound = $('#modelclickSound')[0];
        sound.pause();
        sound.currentTime = 0.0;
        sound.volume = 0.3;
        sound.play();
        currentGame = new Game($(this).attr('id'));
        currentGame.ready();
    });
    $('#cancel').click(function () {
        currentGame.cancel();
        $('#cancelSound')[0].play();
    });

    var skillNameCode = {                     //�л��������ʾ������
        "jslq": '������ȴ',
        "ylmb": '��������',
        "hbzq": '����֮ǽ',
        "dcmc": '�������',
        "qxjf": 'ǿϮ쫷�',
        "ldxj": '�鶯Ѹ��',
        "yycj": '���׳��',
        "rljl": '��¯����',
        "hdys": '������ʯ',
        "czsb": '��������'
    };
})






