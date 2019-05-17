import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Container, Content, Input, Text, Body, Right, Icon, Button } from 'native-base';
import { Calendar } from 'react-native-calendars';

import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.']
};

LocaleConfig.defaultLocale = 'fr';

const CalendarPage = ({ goToEvent, goToReminder, toggleSearch, searchFlag, inputChange, search, currentDate }) => {
  return (
    <Container>
      <Content>
        {!searchFlag ? <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#89ce97', padding: 5 }}>
          <Text style={{ color: 'white' }}>{currentDate.substring(4, currentDate.length)}</Text>
          <Right>
            <TouchableOpacity onPress={() => toggleSearch()}>
              <Icon name='search' style={{ color: 'white', fontSize: 45 }} />
            </TouchableOpacity>
          </Right>
        </Body> :
          <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', padding: 5 + '%', }}>
            <TouchableOpacity onPress={() => toggleSearch()}>
              <Icon name='arrow-back' style={{ fontSize: 35, marginRight: 20 }} />
            </TouchableOpacity>
            <Input type='text' name='search' value={search} placeholder='search' style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }} onChangeText={(text) => inputChange('search', text)} />
          </Body>}
        <Calendar
          style={[styles.calendar]}
          current={'2019-05-16'}
          firstDay={1}
          markedDates={{
            '2012-05-23': { selected: true, marked: true },
          }}
        />
        <Body style={{ width: 100 + '%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#89ce97', padding: 15 }}>
          <Text style={{ color: 'white' }}>{currentDate}</Text>
        </Body>
        <Body style={styles.btnsWrap}>
          <Body style={{ width: 100 + '%' }}>
            <Text style={{ color: '#89ce97' }}>Event</Text>
            <TouchableOpacity style={styles.btn} onPress={() => goToEvent()}>
              <Text style={{ color: 'white' }}>+</Text>
            </TouchableOpacity>
          </Body>
          <Body>
            <Text style={{ color: '#89ce97' }}>Remainder</Text>
            <TouchableOpacity style={styles.btn} onPress={() => goToReminder()}>
              <Text style={{ color: 'white' }}>+</Text>
            </TouchableOpacity>
          </Body>
          <Body>
            <Text style={{ color: '#89ce97' }}>Add holiday</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: 'white' }}>+</Text>
            </TouchableOpacity>
          </Body>
        </Body>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#3e7b70',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 50,
    width: 80,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5 + '%'
  },
  btnsWrap: {
    width: 100 + '%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  }
});

export default CalendarPage;