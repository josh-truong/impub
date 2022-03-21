var dict = {}

const set_dict = (id, content) => {
    dict[id] = content
};

const get_dict = (id) => {
    if (dict.hasOwnProperty(id)) { return dict[id] }
    return null
};


export { set_dict, get_dict }