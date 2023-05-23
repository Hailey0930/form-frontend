import { useState } from "react";
import * as S from "./MenuBar.styles";
import Toggle from "components/commons/Toggle";
import { useRouter } from "next/router";

export default function MenuBar() {
  const [isOn, setIsOn] = useState(true);

  const router = useRouter();

  const CREATE_PAGE = router.asPath.includes("create");
  const RESULT_PAGE = router.asPath.includes("result");

  const onClickQuestion = () => {
    router.push("/create");
  };

  const onClickResult = () => {
    router.push("/result");
  };

  const onClickToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.CategoryTitle
          className={`${CREATE_PAGE ? "active" : ""}`}
          value="question"
          onClick={onClickQuestion}
        >
          설문
        </S.CategoryTitle>
        <S.CategoryTitle
          className={`${RESULT_PAGE ? "active" : ""}`}
          value="result"
          onClick={onClickResult}
        >
          응답
        </S.CategoryTitle>
      </S.LeftContainer>
      <S.RightContainer>
        <S.ResponseContainer>
          응답받기
          <Toggle onClick={onClickToggle} isOn={isOn} />
        </S.ResponseContainer>
        <S.MiddleButtonContainer>
          <S.TextButton>미리보기</S.TextButton>
          <S.TextButton>초기화</S.TextButton>
          <S.TextButton>공유</S.TextButton>
        </S.MiddleButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.RightContainer>
    </S.Wrapper>
  );
}
