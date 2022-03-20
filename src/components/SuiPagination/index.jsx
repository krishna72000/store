/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Custom styles for SuiPagination
import styles from "./styles";


const SuiPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const paginationSize = size;
    const classes = styles({ paginationSize, variant, active });

    return (
      <div>
        {item ? (
          <SuiButton
            {...rest}
            ref={ref}
            variant={active ? variant : "outlined"}
            buttonColor={active ? color : "secondary"}
            iconOnly
            circular
            customClass={classes.suiPagination}
          >
            {children}
          </SuiButton>
        ) : (
          <SuiBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            customClass="no-list-style"
          >
            {children}
          </SuiBox>
        )}
      </div>
    );
  }
);

// Setting default values for the props of SuiPagination
SuiPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

// Typechecking props for the SuiPagination
SuiPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SuiPagination;
