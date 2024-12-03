import PropTypes from "prop-types";
import Editor from "svg-editor/src/lib";


const EditorModal = ({ innerProps }) => (
    <Editor {...innerProps} />
);

EditorModal.propTypes = {
    context: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    innerProps: PropTypes.object.isRequired,
};

export default EditorModal;
