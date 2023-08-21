import styled from "styled-components";
import { STATUS } from "@/enum/STATUS";

const IconContainer = styled.div`
  display: flex;
  width: 36px;
  min-width: 36px;
  justify-content: center;
  align-items: center;

  & > img {
    width: 24px;
    height: 24px;
  }
`;

function TestStatusIcon({ status }: { status: STATUS }) {
  return <IconContainer>{getIcon(status)}</IconContainer>;
}

function getIcon(status: STATUS) {
  switch (status) {
    case STATUS.PASS:
      return <img src="/icon/pass.svg" alt="pass" />;
    case STATUS.FAIL:
      return <img src="/icon/fail.svg" alt="fail" />;
    case STATUS.BLOCKED:
      return <img src="/icon/blocked.svg" alt="blocked" />;
  }
  return <></>;
}

export default TestStatusIcon;
