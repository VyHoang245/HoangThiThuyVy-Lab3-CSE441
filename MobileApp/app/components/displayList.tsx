import { Image } from 'expo-image';
import { Text, View } from "react-native";
import { styles } from "../(tabs)";
// import { Props } from "./module";
export type Props<Data> = {
    data: Data[],
    id: keyof Data,
    primary: keyof Data,
    secondary: keyof Data,
    third: keyof Data,
    fourth: keyof Data,
    fifth: keyof Data,
    sixth: keyof Data,
    seventh: keyof Data,
    eighth: keyof Data,
    nineth: keyof Data,
}

export default function DisplayList<Data>({ data, id, primary, secondary, third, fourth, fifth, sixth, seventh, eighth, nineth }: Props<Data>) {
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
            {
                data.map((item) => {
                    const idValue = item[id] as unknown;
                    if (typeof idValue != "string" && typeof idValue != "number") {
                        return null;
                    }
                    const primaryText = item[primary] as string;
                    const secondaryText = item[secondary] as string;
                    const thirdText = item[third] as string;
                    const fourthText = item[fourth] as string;
                    const fifthText = item[fifth] as string;
                    const sixthText = item[sixth] as string;
                    const seventhText = item[seventh] as string;
                    const eighthText = item[eighth] as string;
                    const ninethText = item[nineth] as string;
                    return (
                        <View style={styles.smallContainer} key={idValue}>
                            <View style={styles.image}>
                                <Image source="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" style={{ width: 100, height: 100 }}></Image>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.title}>Title: {primaryText}</Text>
                                <Text style={styles.text}>Description: {secondaryText}</Text>
                                <Text style={styles.text}>Price: {thirdText}</Text>
                                <Text style={styles.discount}>Discount: {fourthText}</Text>
                                <Text style={styles.text}>Rating: {fifthText}</Text>
                                <Text style={styles.text}>Stock: {sixthText}</Text>
                                <Text style={styles.text}>Brand: {seventhText}</Text>
                                <Text style={styles.text}>Category: {eighthText}</Text>
                            </View>
                        </View>
                    )
                })
            }
            {/* </ScrollView> */}
        </View>
    );
}