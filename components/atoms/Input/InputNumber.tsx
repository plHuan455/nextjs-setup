import React from 'react';
import { Box, Button, SxProps, Theme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';  
import RemoveIcon from '@mui/icons-material/Remove';
import { rem } from '@/styles/mixins';

export interface InputNumberProps {
  sx?: SxProps<Theme>;
  value: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function InputNumber({ 
  sx,
  value,
  min,
  max,
  onChange,
}: InputNumberProps) {
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | {target : {value: number}}) => {
    if(onChange) {
      const value = Number(e.target.value);
      if(!isNaN(value)) {
        if((min !== undefined && value < min) || (max !== undefined && value > max)) return;
        onChange(value)
      } 
    }
  }

  return (
    <Box className="a-input"
      sx={{...sx, display: 'flex', alignItem: 'center'}}
    >
      <Button sx={{minWidth: 0}} onClick={() => handleChange({target: {value: value - 1}})}>
        <RemoveIcon sx={{color: 'text.primary', fontSize: rem(18)}}/>
      </Button>
      <Box component={'input'} value={value} onChange={handleChange} 
        sx={{
          width: rem(34), textAlign: 'center', backgroundColor: 'transparent', border: 0, outline: 'none',
          fontSize: rem(16), color: 'text.primary'
        }}
      />  
      <Button sx={{minWidth: 0}} onClick={() => handleChange({target: {value: value + 1}})}>
        <AddIcon sx={{color: 'text.primary', fontSize: rem(18)}}/>
      </Button>
    </Box>
  )
};
