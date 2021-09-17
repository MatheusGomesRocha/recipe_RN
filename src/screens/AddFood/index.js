import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';
import ServerMessage from '../../components/ServerMessage';

import { black, blackish, defaultColor, white } from '../../globals';
import { api } from '../../services/api';

import {
    AddFoodContainer,

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
    QrCodeMarkdown
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

    const token = useSelector(state => state.user.token);

    useEffect(() => {
        setTimeout(() => {
            setServerMessage('');
            setResult(false);
        }, 2500)
    }, [serverMessage]);

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
        } else {
            let formData = new FormData();
            formData.append('userId', token);
            formData.append('name', name);
            formData.append('quantity', quantity);
            formData.append('quantityType', quantityType);
            formData.append('expireAt', expireAt);

            let fileExtension = dataImg.slice(-3);

            formData.append('img', {
                uri: dataImg,
                type: `image/${fileExtension}`,
                name: 'image'
            })

            api.post(`/insert-refrigerator/auth?token=${token}`, formData)
            .then((res) => {
                setServerMessage(res.data.result);
                setResult(true);

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
            <ScrollView>
                <Header title={"Add New Food"} />

                {serverMessage ?
                    <ServerMessage text={serverMessage} type={result ? 'result' : undefined} />
                    :
                    undefined
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
                                <Input value={expireAt} onChangeText={v => setExpireAt(v)} />
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