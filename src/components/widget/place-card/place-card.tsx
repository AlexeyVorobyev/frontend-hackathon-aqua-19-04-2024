import {FC} from 'react'
import {Box, Button, Paper, Stack, SvgIcon, Typography, useTheme} from '@mui/material'
import {AlexImageView} from '../../../shared-react-components/form-utils/AlexImageView/AlexImageView.tsx'
import {AlexIcon} from '../../../shared-react-components/alex-icon/alex-icon.component.tsx'
import {useNavigate} from 'react-router-dom'

export type TPlaceCardData = {
    imageUrl: string
    name: string
    rating: number
    place: string,
    icons: ('gas' | 'camping' | 'toilet' | 'tent' | 'health')[]
}

const iconNameToSvg = {
    'gas': () => <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.7276 2.47417L12.5141 1.26188C12.4199 1.16769 12.2921 1.11477 12.1589 1.11477C12.0257 1.11477 11.898 1.16769 11.8038 1.26188C11.7096 1.35607 11.6567 1.48383 11.6567 1.61704C11.6567 1.75024 11.7096 1.878 11.8038 1.97219L13.0161 3.18573C13.1097 3.27949 13.1625 3.40648 13.1629 3.53901V8.64481C13.1629 8.77794 13.11 8.90562 13.0159 8.99976C12.9217 9.0939 12.7941 9.14679 12.6609 9.14679C12.5278 9.14679 12.4001 9.0939 12.306 8.99976C12.2118 8.90562 12.1589 8.77794 12.1589 8.64481V6.13489C12.1589 5.73549 12.0003 5.35244 11.7179 5.07002C11.4354 4.7876 11.0524 4.62894 10.653 4.62894H9.64902V1.61704C9.64902 1.21763 9.49036 0.834588 9.20794 0.552167C8.92552 0.269746 8.54247 0.111084 8.14307 0.111084H3.12323C2.72383 0.111084 2.34078 0.269746 2.05836 0.552167C1.77594 0.834588 1.61728 1.21763 1.61728 1.61704V11.1547H0.613312C0.480178 11.1547 0.352496 11.2076 0.258356 11.3018C0.164216 11.3959 0.111328 11.5236 0.111328 11.6567C0.111328 11.7898 0.164216 11.9175 0.258356 12.0117C0.352496 12.1058 0.480178 12.1587 0.613312 12.1587H10.653C10.7861 12.1587 10.9138 12.1058 11.0079 12.0117C11.1021 11.9175 11.155 11.7898 11.155 11.6567C11.155 11.5236 11.1021 11.3959 11.0079 11.3018C10.9138 11.2076 10.7861 11.1547 10.653 11.1547H9.64902V5.6329H10.653C10.7861 5.6329 10.9138 5.68579 11.0079 5.77993C11.1021 5.87407 11.155 6.00175 11.155 6.13489V8.64481C11.155 9.04421 11.3136 9.42725 11.5961 9.70968C11.8785 9.9921 12.2615 10.1508 12.6609 10.1508C13.0603 10.1508 13.4434 9.9921 13.7258 9.70968C14.0082 9.42725 14.1669 9.04421 14.1669 8.64481V3.53901C14.1676 3.3413 14.1292 3.14541 14.0538 2.96264C13.9784 2.77987 13.8676 2.61385 13.7276 2.47417ZM2.62125 11.1547V1.61704C2.62125 1.4839 2.67413 1.35622 2.76827 1.26208C2.86241 1.16794 2.9901 1.11505 3.12323 1.11505H8.14307C8.2762 1.11505 8.40388 1.16794 8.49802 1.26208C8.59216 1.35622 8.64505 1.4839 8.64505 1.61704V11.1547H2.62125ZM7.64108 5.13092C7.64108 5.26406 7.5882 5.39174 7.49406 5.48588C7.39992 5.58002 7.27224 5.6329 7.1391 5.6329H4.1272C3.99406 5.6329 3.86638 5.58002 3.77224 5.48588C3.6781 5.39174 3.62521 5.26406 3.62521 5.13092C3.62521 4.99779 3.6781 4.87011 3.77224 4.77597C3.86638 4.68182 3.99406 4.62894 4.1272 4.62894H7.1391C7.27224 4.62894 7.39992 4.68182 7.49406 4.77597C7.5882 4.87011 7.64108 4.99779 7.64108 5.13092Z"
            fill="#19C595"/>
    </svg>,
    'camping': () => <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.6784 15.3363C14.6551 15.4094 14.6177 15.4772 14.5682 15.5359C14.5187 15.5946 14.4582 15.6429 14.39 15.6782C14.3218 15.7135 14.2474 15.735 14.1709 15.7415C14.0944 15.748 14.0174 15.7393 13.9443 15.7161L7.69428 13.7272L1.44426 15.7161C1.37113 15.7393 1.29412 15.7479 1.21765 15.7414C1.14118 15.7349 1.06674 15.7134 0.998577 15.6782C0.930415 15.6429 0.869866 15.5946 0.820388 15.5359C0.77091 15.4772 0.733473 15.4094 0.710213 15.3363C0.686953 15.2631 0.678326 15.1861 0.684825 15.1096C0.691324 15.0332 0.712821 14.9587 0.74809 14.8906C0.783358 14.8224 0.831707 14.7619 0.890375 14.7124C0.949044 14.6629 1.01688 14.6255 1.09002 14.6022L5.76457 13.1144L1.09002 11.6258C1.01486 11.6043 0.944788 11.5679 0.883943 11.5189C0.823098 11.4698 0.772721 11.409 0.735795 11.3401C0.69887 11.2712 0.676147 11.1955 0.668971 11.1177C0.661795 11.0399 0.670313 10.9614 0.69402 10.8869C0.717727 10.8124 0.756141 10.7434 0.806988 10.684C0.857834 10.6246 0.920079 10.5761 0.990037 10.5412C1.05999 10.5063 1.13624 10.4858 1.21426 10.4809C1.29229 10.476 1.3705 10.4868 1.44426 10.5127L7.69428 12.5008L13.9443 10.5127C14.0181 10.4868 14.0963 10.476 14.1743 10.4809C14.2523 10.4858 14.3286 10.5063 14.3985 10.5412C14.4685 10.5761 14.5307 10.6246 14.5816 10.684C14.6324 10.7434 14.6708 10.8124 14.6945 10.8869C14.7183 10.9614 14.7268 11.0399 14.7196 11.1177C14.7124 11.1955 14.6897 11.2712 14.6528 11.3401C14.6158 11.409 14.5655 11.4698 14.5046 11.5189C14.4438 11.5679 14.3737 11.6043 14.2985 11.6258L9.62399 13.1144L14.2985 14.6022C14.3717 14.6254 14.4395 14.6629 14.4982 14.7124C14.5569 14.7618 14.6052 14.8224 14.6405 14.8905C14.6758 14.9587 14.6973 15.0332 14.7038 15.1096C14.7103 15.1861 14.7016 15.2631 14.6784 15.3363ZM3.31189 6.68687C3.31189 5.21877 4.02549 3.70173 5.37454 2.30448C5.97985 1.67502 6.65552 1.11723 7.38825 0.642096C7.48029 0.585503 7.58623 0.555542 7.69428 0.555542C7.80234 0.555542 7.90827 0.585503 8.00032 0.642096C8.16685 0.7407 12.0767 3.1868 12.0767 6.68687C12.0767 7.84915 11.615 8.96383 10.7931 9.78569C9.97124 10.6075 8.85656 11.0693 7.69428 11.0693C6.532 11.0693 5.41732 10.6075 4.59546 9.78569C3.77361 8.96383 3.31189 7.84915 3.31189 6.68687ZM7.69428 9.90063C8.00422 9.90063 8.30147 9.7775 8.52063 9.55834C8.7398 9.33918 8.86292 9.04193 8.86292 8.73199C8.86292 7.74084 8.13252 6.94543 7.69428 6.55613C7.25604 6.94543 6.52564 7.74084 6.52564 8.73199C6.52564 9.04193 6.64877 9.33918 6.86793 9.55834C7.08709 9.7775 7.38434 9.90063 7.69428 9.90063ZM4.48053 6.68687C4.48028 7.5092 4.79648 8.3001 5.36358 8.8956C5.36358 8.84155 5.35701 8.78677 5.35701 8.73199C5.35701 6.68687 7.28818 5.37873 7.36999 5.32395C7.46601 5.25988 7.57885 5.2257 7.69428 5.2257C7.80971 5.2257 7.92256 5.25988 8.01858 5.32395C8.10038 5.37873 10.0316 6.68687 10.0316 8.73199C10.0316 8.78677 10.0316 8.84155 10.025 8.8956C10.5921 8.3001 10.9083 7.5092 10.908 6.68687C10.908 4.3496 8.55177 2.45056 7.69428 1.84141C6.83753 2.45056 4.48053 4.3496 4.48053 6.68687Z"
            fill="#6E3CCC"/>
    </svg>,
    'toilet': () => <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.05197 6.13489C5.05197 6.29736 5.00379 6.45617 4.91353 6.59125C4.82327 6.72634 4.69498 6.83162 4.54489 6.89379C4.39479 6.95597 4.22963 6.97223 4.07029 6.94054C3.91094 6.90884 3.76458 6.83061 3.6497 6.71573C3.53482 6.60085 3.45659 6.45449 3.42489 6.29515C3.3932 6.13581 3.40947 5.97064 3.47164 5.82055C3.53381 5.67045 3.63909 5.54216 3.77418 5.4519C3.90926 5.36164 4.06808 5.31347 4.23054 5.31347C4.44839 5.31347 4.65733 5.40001 4.81138 5.55406C4.96542 5.7081 5.05197 5.91704 5.05197 6.13489ZM16.2782 6.13489V12.1587C16.2782 12.4492 16.1628 12.7278 15.9574 12.9332C15.752 13.1385 15.4734 13.2539 15.1829 13.2539H7.51625C7.22578 13.2539 6.9472 13.1385 6.7418 12.9332C6.53641 12.7278 6.42101 12.4492 6.42101 12.1587V10.6767C5.83027 11.6364 5.06429 12.1587 4.23054 12.1587C3.2811 12.1587 2.41929 11.4817 1.80459 10.2523C1.25012 9.1468 0.944824 7.68123 0.944824 6.13489C0.944824 4.58855 1.25012 3.12641 1.80459 2.01748C2.41929 0.788078 3.2811 0.111084 4.23054 0.111084H12.9924C13.9419 0.111084 14.8037 0.788078 15.4184 2.01748C15.9729 3.12641 16.2782 4.58855 16.2782 6.13489ZM6.42101 6.13489C6.42101 3.23046 5.26691 1.20632 4.23054 1.20632C3.19417 1.20632 2.04006 3.23046 2.04006 6.13489C2.04006 9.03933 3.19417 11.0635 4.23054 11.0635C5.26691 11.0635 6.42101 9.03933 6.42101 6.13489ZM15.1829 12.1587V6.68251H14.0877C13.9424 6.68251 13.8032 6.62482 13.7005 6.52212C13.5978 6.41942 13.5401 6.28013 13.5401 6.13489C13.5401 5.98966 13.5978 5.85037 13.7005 5.74767C13.8032 5.64497 13.9424 5.58727 14.0877 5.58727H15.1685C15.0351 2.97924 13.9617 1.20632 12.9924 1.20632H6.15542C6.34771 1.46026 6.51549 1.73186 6.65649 2.01748C7.14524 2.99498 7.43959 4.24629 7.50325 5.58727H8.61149C8.75673 5.58727 8.89602 5.64497 8.99872 5.74767C9.10141 5.85037 9.15911 5.98966 9.15911 6.13489C9.15911 6.28013 9.10141 6.41942 8.99872 6.52212C8.89602 6.62482 8.75673 6.68251 8.61149 6.68251H7.51625V12.1587H15.1829ZM11.8972 5.58727H10.802C10.6567 5.58727 10.5174 5.64497 10.4147 5.74767C10.312 5.85037 10.2543 5.98966 10.2543 6.13489C10.2543 6.28013 10.312 6.41942 10.4147 6.52212C10.5174 6.62482 10.6567 6.68251 10.802 6.68251H11.8972C12.0424 6.68251 12.1817 6.62482 12.2844 6.52212C12.3871 6.41942 12.4448 6.28013 12.4448 6.13489C12.4448 5.98966 12.3871 5.85037 12.2844 5.74767C12.1817 5.64497 12.0424 5.58727 11.8972 5.58727Z"
            fill="#19C595"/>
    </svg>,
    'tent': () => <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.9542 10.834L12.7042 0.708984C12.6624 0.609572 12.5944 0.52511 12.5082 0.465831C12.422 0.406552 12.3215 0.375001 12.2187 0.375H4.78124C4.67938 0.375177 4.57972 0.406356 4.49412 0.464823C4.40853 0.523289 4.34062 0.606578 4.29847 0.704766C4.29828 0.706165 4.29828 0.707585 4.29847 0.708984V0.717422L0.0458141 10.834C0.00985406 10.9196 -0.00532558 11.0134 0.00165436 11.1069C0.00863431 11.2003 0.0375526 11.2904 0.0857817 11.369C0.134011 11.4476 0.200022 11.5122 0.277818 11.5569C0.355613 11.6016 0.442727 11.625 0.531244 11.625H16.4687C16.5573 11.625 16.6444 11.6016 16.7222 11.5569C16.8 11.5122 16.866 11.4476 16.9142 11.369C16.9624 11.2904 16.9914 11.2003 16.9983 11.1069C17.0053 11.0134 16.9901 10.9196 16.9542 10.834ZM4.24999 10.5H1.3487L4.24999 3.58828V10.5ZM5.31249 10.5V3.58828L8.21378 10.5H5.31249ZM9.37656 10.5L5.5987 1.5H11.8734L15.6513 10.5H9.37656Z"
            fill="#6F3CCE"/>
    </svg>,
    'health': () => <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.0312 6.53125H12.4688V2.96875C12.4688 2.65381 12.3436 2.35176 12.1209 2.12906C11.8982 1.90636 11.5962 1.78125 11.2812 1.78125H7.71875C7.40381 1.78125 7.10176 1.90636 6.87906 2.12906C6.65636 2.35176 6.53125 2.65381 6.53125 2.96875V6.53125H2.96875C2.65381 6.53125 2.35176 6.65636 2.12906 6.87906C1.90636 7.10176 1.78125 7.40381 1.78125 7.71875V11.2812C1.78125 11.5962 1.90636 11.8982 2.12906 12.1209C2.35176 12.3436 2.65381 12.4688 2.96875 12.4688H6.53125V16.0312C6.53125 16.3462 6.65636 16.6482 6.87906 16.8709C7.10176 17.0936 7.40381 17.2188 7.71875 17.2188H11.2812C11.5962 17.2188 11.8982 17.0936 12.1209 16.8709C12.3436 16.6482 12.4688 16.3462 12.4688 16.0312V12.4688H16.0312C16.3462 12.4688 16.6482 12.3436 16.8709 12.1209C17.0936 11.8982 17.2188 11.5962 17.2188 11.2812V7.71875C17.2188 7.40381 17.0936 7.10176 16.8709 6.87906C16.6482 6.65636 16.3462 6.53125 16.0312 6.53125ZM16.0312 11.2812H11.875C11.7175 11.2812 11.5665 11.3438 11.4552 11.4552C11.3438 11.5665 11.2812 11.7175 11.2812 11.875V16.0312H7.71875V11.875C7.71875 11.7175 7.65619 11.5665 7.54484 11.4552C7.4335 11.3438 7.28247 11.2812 7.125 11.2812H2.96875V7.71875H7.125C7.28247 7.71875 7.4335 7.65619 7.54484 7.54484C7.65619 7.4335 7.71875 7.28247 7.71875 7.125V2.96875H11.2812V7.125C11.2812 7.28247 11.3438 7.4335 11.4552 7.54484C11.5665 7.65619 11.7175 7.71875 11.875 7.71875H16.0312V11.2812Z"
            fill="#19C595"/>
    </svg>,
}

interface IProps {
    data: TPlaceCardData
    linkTo: string
}

export const PlaceCard: FC<IProps> = ({
                                          data,
                                          linkTo,
                                      }) => {
    const theme = useTheme()

    const navigate = useNavigate()

    return (
        <Paper sx={{
            padding: '10px',
            borderRadius: '20px',
        }} elevation={3}>
            <Stack direction={'row'} spacing={theme.spacing(2)}>
                <AlexImageView src={data.imageUrl}
                               paperStyles={{borderRadius: '20px', aspectRatio: '111/128', width: '33vw'}}/>

                <Stack direction={'column'} spacing={theme.spacing(1)} sx={{flexGrow: '1'}}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant={'h5'}>
                            {data.name}
                        </Typography>

                        <Stack direction={'row'} alignItems={'center'} spacing={theme.spacing(1)}>
                            <AlexIcon icon={(
                                <SvgIcon>
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.6676 7.88943C21.5736 7.59961 21.3964 7.34385 21.158 7.15402C20.9197 6.96418 20.6308 6.84865 20.3273 6.82182L14.5632 6.3249L12.3037 0.951918C12.1861 0.669989 11.9877 0.429167 11.7334 0.259776C11.4792 0.0903857 11.1806 0 10.8751 0C10.5696 0 10.2709 0.0903857 10.0167 0.259776C9.76247 0.429167 9.56405 0.669989 9.44641 0.951918L7.19376 6.3249L1.42285 6.82473C1.11813 6.85034 0.827756 6.96534 0.588136 7.15532C0.348516 7.3453 0.170319 7.60179 0.0758916 7.89264C-0.0185357 8.18349 -0.0249899 8.49574 0.0573385 8.79025C0.139667 9.08475 0.307113 9.34839 0.538678 9.5481L4.91684 13.374L3.60465 19.0556C3.53527 19.353 3.55507 19.6641 3.66157 19.9503C3.76808 20.2364 3.95657 20.4848 4.20348 20.6644C4.45039 20.844 4.74476 20.9468 5.04978 20.96C5.35481 20.9732 5.65696 20.8962 5.91845 20.7386L10.8683 17.7299L15.8288 20.7386C16.0903 20.8962 16.3924 20.9732 16.6974 20.96C17.0025 20.9468 17.2968 20.844 17.5437 20.6644C17.7906 20.4848 17.9791 20.2364 18.0856 19.9503C18.1921 19.6641 18.2119 19.353 18.1426 19.0556L16.8313 13.3682L21.2085 9.5481C21.4401 9.3477 21.6072 9.08331 21.6889 8.78818C21.7706 8.49305 21.7632 8.18036 21.6676 7.88943ZM20.1904 8.37471L15.8132 12.1948C15.6002 12.3801 15.4417 12.62 15.3548 12.8887C15.268 13.1573 15.256 13.4446 15.3202 13.7195L16.6353 19.4109L11.6787 16.4021C11.4369 16.2549 11.1592 16.177 10.876 16.177C10.5929 16.177 10.3152 16.2549 10.0734 16.4021L5.12357 19.4109L6.42993 13.7234C6.49413 13.4485 6.48215 13.1612 6.39528 12.8925C6.30841 12.6239 6.14993 12.384 5.93689 12.1987L1.55776 8.38053C1.5574 8.37763 1.5574 8.3747 1.55776 8.37179L7.32672 7.87293C7.60838 7.8481 7.87791 7.74685 8.10625 7.58009C8.33458 7.41332 8.51305 7.18739 8.62241 6.92664L10.8751 1.56046L13.1267 6.92664C13.2361 7.18739 13.4146 7.41332 13.6429 7.58009C13.8712 7.74685 14.1408 7.8481 14.4224 7.87293L20.1924 8.37179C20.1924 8.37179 20.1924 8.37762 20.1924 8.37859L20.1904 8.37471Z"
                                            fill="#FFBF00"/>
                                        <path
                                            d="M20.1904 8.37471L15.8132 12.1948C15.6002 12.3801 15.4417 12.62 15.3548 12.8887C15.268 13.1573 15.256 13.4446 15.3202 13.7195L16.6353 19.4109L11.6787 16.4021C11.4369 16.2549 11.1592 16.177 10.876 16.177C10.5929 16.177 10.3152 16.2549 10.0734 16.4021L5.12357 19.4109L6.42993 13.7234C6.49413 13.4485 6.48215 13.1612 6.39528 12.8925C6.30841 12.6239 6.14993 12.384 5.93689 12.1987L1.55776 8.38053C1.5574 8.37763 1.5574 8.3747 1.55776 8.37179L7.32672 7.87293C7.60838 7.8481 7.87791 7.74685 8.10625 7.58009C8.33458 7.41332 8.51305 7.18739 8.62241 6.92664L10.8751 1.56046L13.1267 6.92664C13.2361 7.18739 13.4146 7.41332 13.6429 7.58009C13.8712 7.74685 14.1408 7.8481 14.4224 7.87293L20.1924 8.37179C20.1924 8.37179 20.1924 8.37762 20.1924 8.37859L20.1904 8.37471Z"
                                            fill="#FFBF00"/>
                                    </svg>
                                </SvgIcon>
                            )}/>
                            <Typography variant={'h6'} sx={{color: '#FFBF00'}}>
                                {data.rating}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={'column'} spacing={theme.spacing(0.5)}>
                        <Stack direction={'row'} alignItems={'center'}>
                            <Stack direction={'column'} spacing={theme.spacing(0.5)}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <AlexIcon icon={(
                                        <SvgIcon>
                                            <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.15625 11.375H5.64461C6.06653 10.9983 6.46442 10.5955 6.83594 10.1689C8.22988 8.56578 8.96875 6.87578 8.96875 5.28125C8.96875 4.09606 8.49794 2.95942 7.65988 2.12137C6.82183 1.28331 5.68519 0.8125 4.5 0.8125C3.31481 0.8125 2.17817 1.28331 1.34012 2.12137C0.502063 2.95942 0.03125 4.09606 0.03125 5.28125C0.03125 6.87578 0.768086 8.56578 2.16406 10.1689C2.53558 10.5955 2.93347 10.9983 3.35539 11.375H0.84375C0.736006 11.375 0.632675 11.4178 0.556488 11.494C0.480301 11.5702 0.4375 11.6735 0.4375 11.7812C0.4375 11.889 0.480301 11.9923 0.556488 12.0685C0.632675 12.1447 0.736006 12.1875 0.84375 12.1875H8.15625C8.26399 12.1875 8.36733 12.1447 8.44351 12.0685C8.5197 11.9923 8.5625 11.889 8.5625 11.7812C8.5625 11.6735 8.5197 11.5702 8.44351 11.494C8.36733 11.4178 8.26399 11.375 8.15625 11.375ZM0.84375 5.28125C0.84375 4.31155 1.22896 3.38157 1.91464 2.69589C2.60032 2.01021 3.5303 1.625 4.5 1.625C5.4697 1.625 6.39968 2.01021 7.08536 2.69589C7.77104 3.38157 8.15625 4.31155 8.15625 5.28125C8.15625 8.18746 5.33941 10.6133 4.5 11.2734C3.66059 10.6133 0.84375 8.18746 0.84375 5.28125ZM6.53125 5.28125C6.53125 4.87951 6.41212 4.48679 6.18892 4.15275C5.96573 3.81871 5.64849 3.55836 5.27733 3.40462C4.90616 3.25088 4.49775 3.21065 4.10372 3.28903C3.7097 3.36741 3.34776 3.56086 3.06369 3.84494C2.77961 4.12901 2.58616 4.49095 2.50778 4.88497C2.4294 5.279 2.46963 5.68741 2.62337 6.05858C2.77711 6.42974 3.03746 6.74698 3.3715 6.97017C3.70554 7.19337 4.09826 7.3125 4.5 7.3125C5.03872 7.3125 5.55538 7.09849 5.93631 6.71756C6.31724 6.33663 6.53125 5.81997 6.53125 5.28125ZM3.28125 5.28125C3.28125 5.0402 3.35273 4.80457 3.48665 4.60415C3.62056 4.40373 3.81091 4.24752 4.0336 4.15527C4.2563 4.06303 4.50135 4.03889 4.73777 4.08592C4.97418 4.13294 5.19134 4.24902 5.36179 4.41946C5.53223 4.58991 5.64831 4.80707 5.69533 5.04348C5.74236 5.2799 5.71822 5.52495 5.62598 5.74765C5.53373 5.97034 5.37752 6.16069 5.1771 6.2946C4.97668 6.42852 4.74105 6.5 4.5 6.5C4.17677 6.5 3.86677 6.3716 3.63821 6.14304C3.40965 5.91448 3.28125 5.60448 3.28125 5.28125Z"
                                                    fill="#19C595"/>
                                            </svg>

                                        </SvgIcon>
                                    )}/>
                                    <Typography sx={{opacity: '0.5'}}>
                                        {data.place}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack direction={'row'} alignItems={'center'} spacing={theme.spacing(1)}>
                            {data.icons.map((icon) => (
                                    <Box sx={{
                                        aspectRatio: '1',
                                        height: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#E3E3E36B',
                                        p: '4px',
                                        borderRadius: '100%',
                                    }}>
                                        {iconNameToSvg[icon]()}
                                    </Box>
                                ),
                            )}
                        </Stack>
                    </Stack>

                    <Stack direction={'row'} justifyContent={'space-between'} spacing={theme.spacing(2)}>
                        <Button variant={'contained'} color={'secondary'} disableElevation
                                onClick={() => navigate(linkTo)}>
                            карточка места
                        </Button>
                    </Stack>
                </Stack>

            </Stack>
        </Paper>
    )
}