import styled from "styled-components"

export const HomeStyle = styled.div`
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    
    .left{
      width: 60%;
      .title{
        p{
          font-size: 15px;
          font-weight: bold;
          text-align: right;
          margin-right: 20px;
        }
      }
      form{
        max-width: 500px;
        margin: 0 auto;
        p{
          font-size: 15px;
          font-weight: bold;
          color: gray;
          margin-bottom: 25px;
          span{
            color: rgb(0, 118, 197);
            cursor: auto;
          }
        }
        h1{
          margin-top: 30%;
          margin-bottom: 40px;
        }
        input, select{
          margin-bottom: 20px;
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
    .right{
      width: 40%;
      padding-top: 20%;
      background-color: rgb(0, 118, 197);
      color: white;
      text-align: center;

      p{
        text-align: left;
        width: 400px;
        margin: 0 auto;
      }
    }
`