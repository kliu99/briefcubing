var Algs = (function () {
    sets = {
        roux_cmll: { name: "Roux CMLL", source: "https://sites.google.com/view/kianroux/cmll", algs: [
            { id: "o_adjacent_swap", name: "O - Adjacent Swap", alg: "R U R' F' R U R' U' R' F R2 U' R'", kind: "cmll" },
            { id: "o_diagonal_swap", name: "O - Diagonal Swap", alg: "r2 D r' U r D' R2 U' F' U' F", kind: "cmll" },
            { id: "h_columns", name: "H - Columns", alg: "R U2 R' U' R U R' U' R U' R'", kind: "cmll" },
            { id: "h_rows", name: "H - Rows", alg: "F R U R' U' R U R' U' R U R' U' F'", kind: "cmll" },
            { id: "h_column", name: "H - Column", alg: "R U2' R2' F R F' U2 R' F R F'", kind: "cmll" },
            { id: "h_row", name: "H - Row", alg: "r U' r2' D' r U' r' D r2 U r'", kind: "cmll" },
            { id: "pi_right_bar", name: "Pi - Right Bar", alg: "F R U R' U' R U R' U' F'", kind: "cmll" },
            { id: "pi_back_slash", name: "Pi - Back Slash", alg: "F R' F' R U2 R U' R' U R U2' R'", kind: "cmll" },
            { id: "pi_x_checkerboard", name: "Pi - X Checkerboard", alg: "R' F R U F U' R U R' U' F'", kind: "cmll" },
            { id: "pi_forward_slash", name: "Pi - Forward Slash", alg: "R U2 R' U' R U R' U2' R' F R F'", kind: "cmll" },
            { id: "pi_columns", name: "Pi - Columns", alg: "r U' r2' D' r U r' D r2 U r'", kind: "cmll" },
            { id: "pi_left_bar", name: "Pi - Left Bar", alg: "R' U' R' F R F' R U' R' U2 R", kind: "cmll" },
            { id: "u_forward_slash", name: "U - Forward Slash", alg: "R2 D R' U2 R D' R' U2 R'", kind: "cmll" },
            { id: "u_back_slash", name: "U - Back Slash", alg: "R2' D' R U2 R' D R U2 R", kind: "cmll" },
            { id: "u_front_row", name: "U - Front Row", alg: "R2' F U' F U F2 R2 U' R' F R", kind: "cmll" },
            { id: "u_rows", name: "U - Rows", alg: "F R2 D R' U R D' R2' U' F'", kind: "cmll" },
            { id: "u_x_checkerboard", name: "U - X Checkerboard", alg: "r U' r' U r' D' r U' r' D r", kind: "cmll" },
            { id: "u_back_row", name: "U - Back Row", alg: "F R U R' U' F'", kind: "cmll" },
            { id: "t_left_bar", name: "T - Left Bar", alg: "R U R' U' R' F R F'", kind: "cmll" },
            { id: "t_right_bar", name: "T - Right Bar", alg: "L' U' L U L F' L' F", kind: "cmll" },
            { id: "t_rows", name: "T - Rows", alg: "F R' F R2 U' R' U' R U R' F2", kind: "cmll" },
            { id: "t_front_row", name: "T - Front Row", alg: "r' U r U2' R2' F R F' R", kind: "cmll" },
            { id: "t_back_row", name: "T - Back Row", alg: "r' D' r U r' D r U' r U r'", kind: "cmll" },
            { id: "t_columns", name: "T - Columns", alg: "r2' D' r U r' D r2 U' r' U' r", kind: "cmll" },
            { id: "s_left_bar", name: "S - Left Bar", alg: "R U R' U R U2 R'", kind: "cmll" },
            { id: "s_x_checkerboard", name: "S - X Checkerboard", alg: "L' U2 L U2' L F' L' F", kind: "cmll" },
            { id: "s_forward_slash", name: "S - Forward Slash", alg: "F R' F' R U2 R U2' R'", kind: "cmll" },
            { id: "s_Columns", name: "S - Columns", alg: "R' U' R U' R2' F' R U R U' R' F U2' R", kind: "cmll" },
            { id: "s_right_bar", name: "S - Right Bar", alg: "R U R' U R' F R F' R U2' R'", kind: "cmll" },
            { id: "s_back_slash", name: "S - Back Slash", alg: "R U' L' U R' U' L", kind: "cmll" },
            { id: "as_right_bar", name: "As - Right Bar", alg: "R' U' R U' R' U2' R", kind: "cmll" },
            { id: "as_columns", name: "As - Columns", alg: "R2 D R' U R D' R' U R' U' R U' R'", kind: "cmll" },
            { id: "as_back_slash", name: "As - Back Slash", alg: "F' L F L' U2' L' U2 L", kind: "cmll" },
            { id: "as_x_checkerboard", name: "As - X Checkerboard", alg: "R U2' R' U2 R' F R F'", kind: "cmll" },
            { id: "as_forward_slash", name: "As - Forward Slash", alg: "L' U R U' L U R'", kind: "cmll" },
            { id: "as_left_bar", name: "As - Left Bar", alg: "R' U' R U' R' U R' F R F' U R", kind: "cmll" },
            { id: "l_mirror", name: "L - Mirror", alg: "F R U' R' U' R U R' F'", kind: "cmll" },
            { id: "l_inverse", name: "L - Inverse", alg: "F R' F' R U R U' R'", kind: "cmll" },
            { id: "l_pure_1", name: "L - Pure 1", alg: "R U2 R' U' R U R' U' R U R' U' R U' R'", kind: "cmll" },
            { id: "l_pure_2", name: "L - Pure 2", alg: "R U R' U R U' R' U R U' R' U R U2 R'", kind: "cmll" },
            { id: "l_front_commutator", name: "L - Front Commutator", alg: "R U2 R D R' U2 R D' R2'", kind: "cmll" },
            { id: "l_diag", name: "L - Diag", alg: "R' U' R U R' F' R U R' U' R' F R2", kind: "cmll" },
            { id: "l_back_commutator", name: "L - Back Commutator", alg: "R' U2 R' D' R U2 R' D R2", kind: "cmll" }]
        },
        cfop_coll: { name: "CFOP COLL", source: "http://www.cyotheking.com/coll", algs: [
            { id: "s_1", name: "Sune 1", alg: "R U R' U R U2 R'", kind: "coll" },
            { id: "s_2", name: "Sune 2", alg: "R U R' U R U' R D R' U' R D' R2'", kind: "coll" },
            { id: "s_3", name: "Sune 3", alg: "R U R' U R2 D R' U2 R D' R2'", kind: "coll" },
            { id: "s_4", name: "Sune 4", alg: "F' R U2 R' U2 R' F2 R U R U' R' F'", kind: "coll" },
            { id: "s_5", name: "Sune 5", alg: "L' R U R' U' L U2 R U2 R'", kind: "coll" },
            { id: "s_6", name: "Sune 6", alg: "R U' L' U R' U' L", kind: "coll" },
            { id: "as_1", name: "Antisune 1", alg: "R' U' R U' R' U2 R", kind: "coll" },
            { id: "as_2", name: "Antisune 2", alg: "R U2 R' U2 L' U R U' R' L", kind: "coll" },
            { id: "as_3", name: "Antisune 3", alg: "R2 D R' U R D' R' U R' U' R U' R'", kind: "coll" },
            { id: "as_4", name: "Antisune 4", alg: "R' U L U' R U L'", kind: "coll" },
            { id: "as_5", name: "Antisune 5", alg: "R2 D R' U2 R D' R2 U' R U' R'", kind: "coll" },
            { id: "as_6", name: "Antisune 6", alg: "R U' R' U2 R U' R' U2 R' D' R U R' D R", kind: "coll" },
            { id: "t_1", name: "T 1", alg: "r U R' U' r' F R F'", kind: "coll" },
            { id: "t_2", name: "T 2", alg: "R' F R U R' U' R' F' R2 U' R' U2 R", kind: "coll" },
            { id: "t_3", name: "T 3", alg: "l' U' L U R U' r' F", kind: "coll" },
            { id: "t_4", name: "T 4", alg: "F R U R' U' R U' R' U' R U R' F'", kind: "coll" },
            { id: "t_5", name: "T 5", alg: "R U2 R' U' R U' R2 U2 R U R' U R", kind: "coll" },
            { id: "t_6", name: "T 6", alg: "R U' R2' D' r U2 r' D R2 U R'", kind: "coll" },
            { id: "u_1", name: "U 1", alg: "R2 D R' U2 R D' R' U2 R'", kind: "coll" },
            { id: "u_2", name: "U 2", alg: "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R", kind: "coll" },
            { id: "u_3", name: "U 3", alg: "R2' D' R U2 R' D R U2 R", kind: "coll" },
            { id: "u_4", name: "U 4", alg: "R' F2 R U2 R U2 R' F2 R U2 R'", kind: "coll" },
            { id: "u_5", name: "U 5", alg: "R U R' U R U2 R2 U' R U' R' U2 R", kind: "coll" },
            { id: "u_6", name: "U 6", alg: "R2 D' R U R' D R U R U' R' U' R", kind: "coll" },
            { id: "l_1", name: "L 1", alg: "F' r U R' U' r' F R", kind: "coll" },
            { id: "l_2", name: "L 2", alg: "R' U' R U R' F' R U R' U' R' F R2", kind: "coll" },
            { id: "l_3", name: "L 3", alg: "F R' F' r U R U' r'", kind: "coll" },
            { id: "l_4", name: "L 4", alg: "R U2 R D R' U2 R D' R2", kind: "coll" },
            { id: "l_5", name: "L 5", alg: "R' U' R U' R' U R U' R' U R U' R' U2 R", kind: "coll" },
            { id: "l_6", name: "L 6", alg: "R' U2 R' D' R U2 R' D R2", kind: "coll" },
            { id: "pi_1", name: "Pi 1", alg: "R U2 R2' U' R2 U' R2' U2' R", kind: "coll" },
            { id: "pi_2", name: "Pi 2", alg: "R U R' U' R' F R2 U R' U' R U R' U' F'", kind: "coll" },
            { id: "pi_3", name: "Pi 3", alg: "R' F2 R U2 R U2 R' F2 U' R U' R'", kind: "coll" },
            { id: "pi_4", name: "Pi 4", alg: "r U' r' U' r U r' U' x' R2 U' R' U R' x", kind: "coll" },
            { id: "pi_5", name: "Pi 5", alg: "F U R U' R' U R U2 R' U' R U R' F'", kind: "coll" },
            { id: "pi_6", name: "Pi 6", alg: "R U D' R U R' D R2 U' R' U' R2' U2' R", kind: "coll" },
            { id: "h_1", name: "H 1", alg: "R U R' U R U' R' U R U2 R'", kind: "coll" },
            { id: "h_2", name: "H 2", alg: "F R U R' U' R U R' U' R U R' U' F'", kind: "coll" },
            { id: "h_3", name: "H 3", alg: "F R U' R' U R U2 R' U' R U R' U' F'", kind: "coll" },
            { id: "h_4", name: "H 4", alg: "R' F' R U2 R U2 R' F U' R U' R'", kind: "coll" }]
        }
    }

    return {
        sets: sets
    };
}());