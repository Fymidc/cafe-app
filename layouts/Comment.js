import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Modal, TextInput } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { deleteComment, editComment } from '../actions/commentActions'

const Comment = ({ name, text, id ,uid ,cid}) => {


    console.log("cid",cid)
    console.log("uid",uid)
    console.log(cid==uid)

    const [modalvisible, setmodalvisible] = useState(false)
    const [editmodalvisible, seteditmodalvisible] = useState(false)
    const [edittext, setedittext] = useState(text)

    const openEditModal = () => {
        setmodalvisible(false)
        seteditmodalvisible(true)

    }

    const dispatch = useDispatch()

    const editData = {
        text: edittext
    }

    const handleEdit = () => {
        dispatch(editComment(JSON.stringify(editData), id))

        seteditmodalvisible(false)
    }

    const handleDelete = (id) => {
        dispatch(deleteComment(id))

        setmodalvisible(false)
    }





    return (
        <View style={styles.commentcontainer} >
            <View style={{ flexDirection: "row" }}>


                <Pressable onPress={() => { setmodalvisible(true) }} >
                    <Text ><Feather style={{ paddingRight: 10 }} onPress={() => console.log("profile gidewn comment")} color="black" name="user" size={20} />


                        <Text style={{ fontWeight: "700" ,color:"orange"}} >{name + ": "}</Text>
                        {text}</Text>
                </Pressable>
            </View>


            {uid == cid ?

                <Modal animationType='slide'

                    transparent={true}
                    visible={modalvisible}
                    onRequestClose={() => { setmodalvisible(!modalvisible) }}
                >
                    <View style={{ justifyContent: "flex-end", flex: 1, backgroundColor: '#00000080' }}>

                        <View style={{ borderTopRightRadius: 25, borderTopLeftRadius: 25, justifyContent: "center", backgroundColor: "white", height: 260 }} >
                            <View style={{ marginHorizontal: 10, flex: 1, justifyContent: "space-evenly" }} >
                                <Pressable style={{ paddingVertical: 5, alignItems: "center" }} onPress={() => { { setmodalvisible(false) } }} ><Text style={{ width: 50, borderBottomWidth: 3 }}  ></Text></Pressable>

                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => openEditModal()} >
                                    <Ionicons style={{ padding: 10 }} color="black" name="pencil-outline" size={28} />
                                    <Text style={{ fontSize: 16 }} >Edit</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => handleDelete(id)} >
                                    <Ionicons style={{ padding: 10 }} color="black" name="trash-outline" size={28} />
                                    <Text style={{ fontSize: 16 }} >Delete</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Ionicons style={{ padding: 10 }} color="black" name="warning-outline" size={28} />
                                    <Text style={{ fontSize: 16 }} >Report</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                </Modal>

                :

                <Text></Text>
            }

            <Modal
                animationType='slide'
                visible={editmodalvisible}
                onRequestClose={() => { seteditmodalvisible(!editmodalvisible) }}
            >

                <View style={{ flex: 1, marginTop: 50, alignItems: "center" }} >
                    <TextInput
                        onChangeText={setedittext}
                        value={edittext}

                        style={{
                            color: "black",
                            marginVertical: 10,
                            width: 320,
                            padding: 5,
                            borderBottomWidth: 1,
                            borderBottomColor: "#303030"
                        }}

                        placeholderTextColor={"#B0B0B0"}
                        placeholder="search..."
                        keyboardType="default"
                    />

                    <TouchableOpacity onPress={() => handleEdit()} >
                        <Text style={{ borderWidth: 1, borderRadius: 10, marginTop: 10, paddingHorizontal: 15, paddingVertical: 5 }} >Edit</Text>
                    </TouchableOpacity>

                </View>


            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    commentcontainer: {

        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
        padding: 10,
        margin: 10,
        marginHorizontal: 15
    }
})

export default Comment
