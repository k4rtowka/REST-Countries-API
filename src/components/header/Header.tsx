import classes from "./header.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {switchTheme} from "../../store/action-creators/ThemeAction.ts";
import dark from '../../assets/icon-dark.svg';
import light from '../../assets/icon-light.svg';


const Header = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme.theme)
    const mode = theme.charAt(0).toUpperCase() + theme.slice(1)


    return (
        <div className={classes.header}>
            <h2 className={classes.title}>Where in the world?</h2>
            <div className={classes.rightSide} onClick={() => dispatch(switchTheme())}>
                <img src={theme==='dark'?light:dark} alt={theme}
                     style={{width: "18px", height: "18px"}}
                >
                </img>
              <span >{mode} mode</span>
            </div>
        </div>
    );
};

export default Header;