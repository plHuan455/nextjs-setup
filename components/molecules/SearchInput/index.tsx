import { rem } from "@/styles/mixins";
import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  value: string;
  onChange?: (data: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  ...args
}) => {
  return (
    <Box className='m-searchInput'
      sx={{position: 'relative'}}
    >
      <Box component='input' {...args} value={value} onChange={(e) => onChange && onChange(e.target.value)} 
        sx={{
          border: 0, outline: 'none', backgroundColor: 'white', p: rem(16), pl: rem(50), width: '100%', borderRadius: rem(32),
          '&::placeholder': { color: 'text.secondary', fontSize: rem(16), lineHeight: rem(23), fontWeight: 500},
        }}
      />
      <SearchIcon sx={{color: 'text.primary', position: 'absolute', top: '50%', left: rem(18), transform: 'translateY(-50%)'}}/>
    </Box>
  )
}

export default SearchInput;