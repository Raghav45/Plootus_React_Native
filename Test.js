import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
export default class Test extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Button
                title="Other Assets"
                onPress={()=>{
                    this.props.navigation.navigate('OtherAssets')
                }}
                buttonStyle={styles.buttonStyle}
                />
                <Button
                title="Bank Account"
                onPress={()=>{
                    this.props.navigation.navigate('BankAccountScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="Plan529"
                onPress={()=>{
                    this.props.navigation.navigate('Plan529Screen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="Proposed401KFund"
                onPress={()=>{
                    this.props.navigation.navigate('Proposed401KFundScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="RetirementPlans"
                onPress={()=>{
                    this.props.navigation.navigate('RetirementPlansScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="Assets Allocation"
                onPress={()=>{
                    this.props.navigation.navigate('AssetsAllocationScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="Real State"
                onPress={()=>{
                    this.props.navigation.navigate('RealStateScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="Income & Expenses"
                onPress={()=>{
                    this.props.navigation.navigate('IncomeNExpensesScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                 <Button
                title="***Plan"
                onPress={()=>{
                    this.props.navigation.navigate('PlanScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                  <Button
                title="***RSP"
                onPress={()=>{
                    this.props.navigation.navigate('RspScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                   <Button
                title="Net Worth"
                onPress={()=>{
                    this.props.navigation.navigate('NetWorthScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
                <Button
                title="Retirement Planner"
                onPress={()=>{
                    this.props.navigation.navigate('RetirementPlannerScreen')
                }}
                buttonStyle={styles.buttonStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
     buttonStyle:{
         marginBottom: 10
     }
})
