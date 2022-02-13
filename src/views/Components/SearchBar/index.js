import { CONSTANTS } from "../../../Utils/Constants"
import Theme from "../../../Utils/theme"
import CardLayout from "../Cards/Layout"
import Flex from "../Container"

const SearchBar = ({ style = {} }) => {
    const styles = {
        container: {
            width: "100%",
        },
        searchBar: {
            background: Theme.COLORS.shades.color_8,
            padding: Theme.SPACING(20),
            borderRadius: Theme.SPACING(10),
            border: `${Theme.SPACING(1)} solid ${Theme.COLORS.colors.color_1}`,
            width: "100%",
            fontWeight: CONSTANTS.CSSStyles.FONTS.BOLD,
            height: Theme.SPACING(25),
            ...Theme.COLORS.effects.circleShadow,
        }
    }
    return <CardLayout heading="Search" style={{ ...style }}>
        <Flex style={styles.container}>
            <input type="text" style={styles.searchBar} placeholder="Search anything" />
        </Flex>
    </CardLayout >
}

export default SearchBar;