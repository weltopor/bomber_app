export function getTelegramUser(
    tg
){

    if(
        !tg ||
        !tg.initDataUnsafe
    ){

        return {
            id:0,
            first_name:"Guest"
        };
    }

    return (
        tg.initDataUnsafe.user ||
        {
            id:0,
            first_name:"Guest"
        }
    );
}