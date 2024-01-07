import styled from "@emotion/styled";

const Container=styled.div`
box-sizing:border-box;
display: flex;
flex-direction: column;
justify-content: center;
width:${props=>props.width||"50%"};
margin-top: 20px;
padding: 10px;

@media (max-width:1240px){
    width: 100%;
}

.dp-flx{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
        p{
        font-weight: 500;
    font-size: 16px;
    text-decoration: underline;
    margin-bottom: 4px !important;
    }
`

export default Container