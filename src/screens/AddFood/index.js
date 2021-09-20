import React, { useEffect, useState } from 'react';
import { ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { TextInputMask } from 'react-native-masked-text';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';
import ServerMessage from '../../components/ServerMessage';
import ModalLoading from '../../components/ModalLoading';

import { black, blackish, defaultColor, white } from '../../globals';
import { api } from '../../services/api';

import {
    AddFoodContainer,

    ModalContainer,
    ModalTitle,
    ModalArea,
    ModalText,
    ModalButton,
    ModalButtonText,

    ActionButtons,
    ActionButton,
    ActionButtonText,

    InputArea,

    InputView,
    ImageButton,
    Image,
    ImageText,
    Label,
    InputFather,
    Input,
    QuantityItem,
    QuantityItemText,

    SubmitButton,
    SubmitButtonText,

    QrCodeArea,
    QrCodeTitle,
    QrCodeItem,
    QrCodeMarkdown,
} from './styles';

let array = [
    {id: 1, title: 'KG'},
    {id: 2, title: 'Piece'},
    {id: 3, title: 'Packet'},
    {id: 4, title: 'Others'},
];

export default function AddFood () {
    const [addFood, setAddFood] = useState('manually');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [quantityType, setQuantityType] = useState('');
    const [expireAt, setExpireAt] = useState('');
    const [dataImg, setDataImg] = useState('');
    const [serverMessage, setServerMessage] = useState('');
    const [result, setResult] = useState(false); 
    const [modalVisible, setModalVisible] = useState(false);
    const [modalLoadingVisible, setModalLoadingVisible] = useState(false);

    const token = useSelector(state => state.user.token);

    useEffect(() => {
        setTimeout(() => {
            setModalLoadingVisible(false);
        }, 2500);
        
        setTimeout(() => {
            setResult('');
        }, 7500);
    }, [modalLoadingVisible]);

    const ModalMessage = () => {
        return(
            <ModalContainer>
                <ModalArea>
                    <ModalTitle>Something wrent wrong</ModalTitle>
                    <ModalText>{serverMessage}</ModalText>
                    
                    <ModalButton>
                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                            <ModalButtonText>Cancel</ModalButtonText>
                        </TouchableWithoutFeedback>
                    </ModalButton>
                </ModalArea>
            </ModalContainer>
        )
    }

    const RenderItemCode = () => {
        return(
            <>
                <QrCodeArea>
                    <QrCodeTitle>You can search near by device, or scan by QR code</QrCodeTitle>

                    <QrCodeItem>
                        <AntDesign name="qrcode" size={120} color="#000" />
                    </QrCodeItem>
                        <QrCodeMarkdown />
                </QrCodeArea>

                <SubmitButton style={{marginTop: 'auto'}}>
                    <SubmitButtonText>Add Food</SubmitButtonText>
                </SubmitButton>
            </>
        )
    }

    function chooseImageGallery () {
        launchImageLibrary(null, (res) => {
            let data = res.assets;
            setDataImg(data[0].uri);
        });
    }

    function submitData () {
        if(!dataImg || !name || !quantity || !quantityType || !expireAt) {
            setServerMessage('All fields are required');
            setModalVisible(true);
        } else {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            let dayInput = parseInt(expireAt.substring(2, 0));
            let monthInput = parseInt(expireAt.substring(5, 3));
            let yearInput = parseInt(expireAt.substring(10, 6));

            if(day < 10) {
                day = `0${day}`;
            }

            
            // Se o input passar por todas as verificações acima, ele é enviado para a API com o código abaixo

            let formatDate = `${day}/0${month}/${year}`;

            let formData = new FormData();
            formData.append('userId', token);
            formData.append('name', name);
            formData.append('quantity', quantity);
            formData.append('quantityType', quantityType);
            formData.append('addedAt', formatDate);
            formData.append('expireAt', expireAt);

            let fileExtension = dataImg.slice(-3);

            formData.append('img', {
                uri: dataImg,
                type: `image/${fileExtension}`,
                name: 'image'
            })

            setModalLoadingVisible(true);

            api.post(`/insert-refrigerator/auth?token=${token}`, formData)
            .then((res) => {
                setTimeout(() => {
                    setResult(res.data.result);
                }, 2500)

                setName('');
                setQuantity('');
                setQuantityType('');
                setExpireAt('');
                setDataImg('');
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return(
        <AddFoodContainer>
            <Modal 
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="fade"
                transparent={true}
            >
                <ModalMessage />
            </Modal>

            <Modal 
                visible={modalLoadingVisible}
                onRequestClose={() => setModalLoadingVisible(false)}
                animationType="fade"
                transparent={true}
            >
                <ModalLoading />
            </Modal>

            <ScrollView>
                <Header title={"Add New Food"} />

                {result ? 
                    <ServerMessage type="result" text={result} />
                    : undefined
                }

                <ActionButtons>
                    <ActionButton backgroundColor={addFood === 'manually' ? defaultColor : 'transparent'} onPress={() => setAddFood('manually')}>
                        <ActionButtonText color={addFood === 'manually' ? white : black}>Add Manually</ActionButtonText>
                    </ActionButton>

                    <ActionButton backgroundColor={addFood === 'code' ? defaultColor : 'transparent'} onPress={() => setAddFood('code')}>
                        <ActionButtonText color={addFood === 'code' ? white : black}>Scan QR Code</ActionButtonText>
                    </ActionButton>
                </ActionButtons>

                {addFood === 'manually' ? 
                    <InputArea>
                        <ImageButton onPress={chooseImageGallery}>
                            {dataImg ?
                                <Image source={{uri: dataImg}} resizeMode="contain" />    
                            :
                                <ImageText>Upload Image</ImageText>
                            }
                        </ImageButton>

                        <InputView>
                            <Label>Name</Label>

                            <InputFather>
                                <Input value={name} onChangeText={v => setName(v)} />
                            </InputFather>
                        </InputView>

                        <InputView>
                            <Label>Quantity</Label>

                            <ScrollView horizontal={true} contentContainerStyle={{paddingHorizontal: 20, marginVertical: 10}}>
                                {array.map((item, k) => (
                                    <QuantityItem borderColor={quantityType === item.title ? defaultColor : 'transparent'} onPress={() => setQuantityType(item.title)} key={k}>
                                        <QuantityItemText color={quantityType === item.title ? defaultColor : blackish}>{item.title}</QuantityItemText>
                                    </QuantityItem>
                                ))}
                            </ScrollView>

                            <InputFather>
                                <Input keyboardType="numeric" onChangeText={v => setQuantity(v)} />
                            </InputFather>
                        </InputView>

                        <InputView>
                            <Label>Expire date</Label>

                            <InputFather>
                                <TextInputMask
                                    style={{
                                        flex: 1,
                                        color: '#000',
                                        paddingLeft: 10
                                    }}
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    value={expireAt}
                                    onChangeText={v => setExpireAt(v)}
                                />
                            </InputFather>
                        </InputView>
                        
                        <SubmitButton onPress={submitData}>
                            <SubmitButtonText>Add Food</SubmitButtonText>
                        </SubmitButton>
                    </InputArea>
                    : 
                    <RenderItemCode />
                }
            </ScrollView>
        </AddFoodContainer>
    )
}