import SvgIcon from '@mui/material/SvgIcon';

function FantasyIcon() {
  return (            
    <SvgIcon sx={{position: "relative", right:"5px"}}>
        <path
          d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77L21 1zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
          fill="#eba731"
        />
    </SvgIcon>
  )
}

export default FantasyIcon;
