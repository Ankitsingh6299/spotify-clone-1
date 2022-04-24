export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
   //token:'BQCo5qMg3s8YvwRkWvexy1r_irpnlDZ5IKyfCPo_r5csYJ22ha_l0-aE8dxi4TW46G36FPRrepUpea6JR4ZrL4DJisYzd59egtRBbFNNfA6wxpuFyCHy5eZkxwwmTlOgrf511a4hG1qsh_jOLXS4i1g2KL1K0vffWmOH6bxmKTMnc3jW7xFl',
    
};
const reducer = (state,action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
          case "SET_TOKEN":
            return{
              ...state,
              token:action.token,
            };
          case "SET_PLAYLISTS":
            return{
              ...state,
              playlists:action.playlists,
            }
        }
    }
    export default reducer;