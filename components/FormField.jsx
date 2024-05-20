import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { icons } from '../constants';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  edit,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (selectedDate) => {
    setShowCalendar(false);
    handleChangeText(selectedDate);
  };

  const handleModalClose = () => {
    setShowCalendar(false);
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center relative">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={(title === "Password" || title === "Current password" || title === "New password") && !showPassword}
          editable={edit}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {title === "Current password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {title === "New password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {title === "Date of Birth" && (
          <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
            <Image
              source={icons.calendar}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {showCalendar && (
          <Modal
            transparent={true}
            visible={showCalendar}
            animationType="fade"
            statusBarTranslucent={true}
            onRequestClose={handleModalClose} // This handles the request to close the modal
          >
            <TouchableWithoutFeedback onPress={handleModalClose}>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
                <View style={{
                  width: 450,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <DatePicker
                    mode="calendar"
                    onSelectedChange={handleDateChange}
                    placeHolderTextStyle={{ color: '#d3d3d3' }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </View>
    </View>
  );
};

export default FormField;
