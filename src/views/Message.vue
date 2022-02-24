<template>
    <div class="message-box">
        <div class="representative-box">
            <div class="company-name">
                <div>
                    コスモコンサルティング株式会社
                </div>
                <div>
                    体表取締役
                </div>
            </div>
            <div class="name">
                <span>
                    <b>白山 善夫</b>    
                </span>
                <span>
                    <b>[SHIRAYAMA YOSIO]</b>
                </span>
            </div>
        </div>
        <b><font class="shoshin">「初心」 </font></b>
        <div class="cont">
            最初の心構えを忘れずに持ち続ける。<br/>
            これが弊社の社訓です。<br/>
            「初心を持って、責任ある行動をし、自分自身の向上は無論、会社に貢献する。」と言うことです。
        </div>
        <div class="cont">
            弊社はSystemIntergrationを中核に、<br/>
            パッケージソフトウェアの展開を行っております。
        </div>
        <div class="cont">
            e-ERP、e-SCM、e-Procurement、e-Market Place、e-ShoppingMall Wizard、<br/>
            e-HomePage Wizardのソリューションをご提供いたします。
        </div>
        <div class="cont">
            また、JAVA、.NET、C系列、VB系列及び組込系等の専門要員が御社のシステム構築を<br/>
            コンサルティングサービスから、開発、保守までを一元化し、<br/>
            「なせばなる。」との信念を持って、サポートさせていただきます。
        </div>
        <div class="cont">
            今後とも、より一層のご指導・ご愛顧賜りますようよろしくお願い申し上げます。
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
}
</script>

<style scoped>

.message-box {
    position: relative;
    display: block;
    width: 70%;    
    margin: 0 auto;
    min-height: 500px;
    text-align: left;
    font-weight: bold;
}

.representative-box {
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: initial;
}

.company-name {
    font-size: 25px;
    line-height: 1;
}

.company-name div {
    margin-bottom: 10px;
}

.representative-box .name{
    font-size: 30px;
    font-weight: bolder;
    padding-top: 10px;
}

.message-box .cont {
    margin-bottom: 30px;
    line-height: 25px;
}

.message-box .shoshin {
    display: block;
    color: #0066FF;
    font-size: 35px;
    padding-bottom: 40px;
}

@media (max-width: 984px) {
    .representative-box .name span,
    .message-box .shoshin,
    .company-name div {
        text-align: center;
    }

    .representative-box .name span {
        display: block;
    }
}


</style>