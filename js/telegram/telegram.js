export function initTelegram(){

    const tg =
        window.Telegram?.WebApp;

    if(!tg){

        console.log(
            "Telegram not found"
        );

        return null;
    }

    tg.expand();

    return tg;
}