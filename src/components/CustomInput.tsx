import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Mail,
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
} from 'lucide-react-native';

interface CustomInputProps {
  label: string;
  placeholder: string;
  type: 'name' | 'email' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

const CustomInput = ({
  label,
  placeholder,
  type,
  value,
  onChangeText,
  error,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  const Icon =
    type === 'email'
      ? Mail
      : type === 'password'
      ? LockKeyhole
      : UserRound;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        <Icon size={20} color="#64748B" />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
          autoCorrect={false}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={20} color="#64748B" />
            ) : (
              <Eye size={20} color="#64748B" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
  },
  inputError: {
    borderColor: '#EF4444',
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: '#0F172A',
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 5,
  },
});

export default CustomInput;