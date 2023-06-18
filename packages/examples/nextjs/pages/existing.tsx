import { Box, Button } from '@highoutput/hds';
import { RangeDatePickerDropdown } from '@highoutput/hds-date-picker';
import { ComboboxField, SelectField } from '@highoutput/hds-forms';

export default function Existing() {
  return (
    <Box p={8}>
      <RangeDatePickerDropdown>
        {({ onToggle }) => (
          <Button size="sm" variant="outline" colorScheme="gray" onClick={onToggle}>
            Select Date
          </Button>
        )}
      </RangeDatePickerDropdown>

      <ComboboxField
        mt={4}
        placeholder="Combobox"
        options={[
          { label: 'One', value: 1 },
          { label: 'Two', value: 2 },
          { label: 'Three', value: 3 },
        ]}
      />

      <SelectField
        mt={4}
        placeholder="Select"
        options={[
          { label: 'One', value: 1 },
          { label: 'Two', value: 2 },
          { label: 'Three', value: 3 },
        ]}
      />
    </Box>
  );
}
