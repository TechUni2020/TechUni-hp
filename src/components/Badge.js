import React from 'react';
import { Badge as BootstrapBadge } from 'react-bootstrap';

function Badge(props) {
    const {
        bg,
        pill,
        children,
        ...otherProps
    } = props;

    const _className = ` mx-2 fw-normal `;

    return (
        <BootstrapBadge bg="secondary" pill={pill} className={_className} {...otherProps}>
            {children}
        </BootstrapBadge>
    )
}

export default Badge;