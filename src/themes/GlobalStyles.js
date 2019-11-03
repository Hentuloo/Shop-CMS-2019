import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .myColors-dark{
     background-color: #171e26 !important;
  }
  .border-width-1{
     border-width: 2px !important;
  }
  .border-width-2{
     border-width: 4px !important;
  }
  .border-width-3{
     border-width: 6px !important;
  }
  .mh-70{
     max-height:70vh;
  }
  .cursor-pointer{
  cursor: pointer;
}
.bg-transparent{
   background-color: transparent !important;
}
.absoluteHidden{
   position: absolute;
    top: -9999px;
    left: -9999px;
}
.sticky-left{
   left:0% !important;
}
.sticky-top{
   top:0% !important;
}
.sticky-right{
   right:0% !important;
}
.sticky-bottom{
   bottom:0% !important;
}
.cursor-pointer{
   cursor: pointer !important;
}
.w-md-75{
   @media ${({ theme }) => theme.mq.md}{
   max-width: 75% !important;
   }
}
`;
