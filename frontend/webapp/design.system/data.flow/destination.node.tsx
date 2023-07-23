import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Logo from "assets/logos/code-sandbox-logo.svg";
import { styled } from "styled-components";
import { KeyvalImage, KeyvalText } from "@/design.system";
import { TapList } from "@/components/setup/destination/tap.list/tap.list";
import { MONITORING_OPTIONS } from "@/components/setup/destination/utils";

const DestinationNodeContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  border-radius: 12px;
  border: ${({ theme }) => `solid 1px ${theme.colors.blue_grey}`};
  background: ${({ theme }) => theme.colors.light_dark};
  align-items: center;
  justify-content: space-between;
  width: 368px;
`;

export const NodeDataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const IMAGE_STYLE: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: 4,
};

const IconWrapper = styled.div`
  padding: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.dark_blue};
`;

const MonitorsListWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default memo(({ data, isConnectable }: any) => {
  function renderMonitors() {
    return MONITORING_OPTIONS.map((monitor) => (
      <IconWrapper>
        {true ? monitor.icons.focus() : monitor.icons.notFocus()}
      </IconWrapper>
    ));
  }

  return (
    <DestinationNodeContainer>
      <NodeDataWrapper>
        <Logo width={40} />
        {/* <KeyvalImage src={icon} width={40} height={40} style={IMAGE_STYLE} /> */}
        <TextWrapper>
          <KeyvalText size={14} weight={600}>
            {"Application name"}
          </KeyvalText>
          <KeyvalText color={"#8b92a5"}>{"80 apps"}</KeyvalText>
        </TextWrapper>
      </NodeDataWrapper>
      <MonitorsListWrapper>{renderMonitors()}</MonitorsListWrapper>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
        style={{ visibility: "hidden" }}
      />
    </DestinationNodeContainer>
  );
});
