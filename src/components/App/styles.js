import styled from 'styled-components';
import { injectGlobal } from 'styled-components'

export const Ul = styled.ul` 
    min-height: calc(100vh - 370px);
    margin-top: 8px;
    margin-bottom: 8px;
`;

injectGlobal`
    html,body {
        margin: 0;
        height: 100%;
    }
`;
